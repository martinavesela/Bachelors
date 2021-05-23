import datetime
import os
import shutil

import docker
import flask
from docker.types import Mount
from flask import Flask, request, Response, jsonify
from psycopg2 import errors as db_error

from database.connect import connect

app = Flask(__name__)
docker_d = docker.from_env()
lessonsColumns = ["lesson_id", "name", "text", "solution", "p_in", "p_test", "j_in", "j_test", "p_in_lock",
                  "p_test_lock", "j_in_lock", "j_test_lock"]

savesColumns = ["save_id", "user_id", "lesson_id", "time", "comment", "p_in", "p_test", "p_out", "j_in", "j_test",
                "j_out"]

TIMEOUT = 15
SIZE_LIMIT = 2 ** 20


@app.route("/register/<name>/<password>", methods=["POST"])
def register(name, password):
    with connect() as conn:
        with conn.cursor() as cur:
            try:
                print("register => trying to insert into database")
                cur.execute("INSERT INTO users (nickname, password) VALUES (%(name)s, %(password)s) RETURNING user_id",
                            {"name": name, "password": password})
                print("register => executed")
                user_id = cur.fetchone()[0]
                print("register => user_id = " + str(user_id))
                conn.commit()
                return str(user_id)
            except db_error.UniqueViolation:
                print("register => uniqueNameViolation")
                return "Name already exists."


@app.route("/login/<name>/<password>", methods=["POST"])
def login(name, password):
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM users WHERE nickname = %(name)s", {"name": name})
            user = cur.fetchone()
            if user is None:
                print("login => user doesnt exist")
                return "User with name " + name + " is not registered."
            if user[2] != password:
                print("login => wrong password")
                return "Wrong password for registered user " + name + "."
            print("login => success")
            return str(user[0])


@app.route("/lesson/<lesson_id>", methods=["GET"])
def load_lesson(lesson_id):
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM lessons WHERE lesson_id = %(lesson_id)s", {"lesson_id": lesson_id})
            lesson = cur.fetchone()
            result = dict()
            for k, v in list(zip(lessonsColumns, lesson)):
                result[k] = v
            return result


@app.route("/lessons/", methods=["GET"])
def get_lessons():
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT name FROM lessons WHERE lesson_id != 1")
            lessons = cur.fetchall()
            return jsonify(lessons)


@app.route("/load-save/<save_id>", methods=["GET"])
def load_save(save_id):
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM saves WHERE save_id = %(save_id)s", {"save_id": save_id})
            save = cur.fetchone()
            if save is None:
                return "0"
            result = dict()
            for k, v in list(zip(savesColumns, save)):
                result[k] = v
            return result


@app.route("/latest-save/<user_id>/<lesson_id>", methods=["GET"])
def load_latest_save(user_id, lesson_id):
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM saves WHERE user_id = %(user_id)s AND lesson_id = %(lesson_id)s "
                        "ORDER BY time DESC LIMIT 1", {"user_id": user_id, "lesson_id": lesson_id})
            save = cur.fetchone()
            if save is None:
                return "0"
            result = dict()
            for k, v in list(zip(savesColumns, save)):
                result[k] = v
            return jsonify(result)


@app.route("/saves/<user_id>/<lesson_id>", methods=["GET"])
def get_saves(user_id, lesson_id):
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT save_id, time, comment FROM saves WHERE user_id = %(user_id)s "
                        "AND lesson_id = %(lesson_id)s", {"user_id": user_id, "lesson_id": lesson_id})
            saves = cur.fetchall()
            if len(saves) == 0:
                cur.execute("SELECT p_in, p_test, j_in, j_test FROM lessons WHERE lesson_id = %(lesson_id)s",
                            {"lesson_id": lesson_id})
                lesson = cur.fetchone()
                cur.execute("INSERT INTO saves (user_id, lesson_id, comment, p_in, p_test, j_in, j_test) "
                            "VALUES (%(user_id)s, %(lesson_id)s, 'Default', %(p_in)s, %(p_test)s, %(j_in)s, "
                            "%(j_test)s) RETURNING *", {"user_id": user_id, "lesson_id": lesson_id, "p_in": lesson[0],
                                                        "p_test": lesson[1], "j_in": lesson[2], "j_test": lesson[3]})
                saves = cur.fetchone()
                conn.commit()
            result = []
            for save in saves:
                formatted_time = save[1].strftime("%a. %b. %d. - %H:%M:%S")
                if save[2] == "":
                    result.append((save[0], formatted_time))
                else:
                    result.append((save[0], formatted_time + " - " + save[2]))
            return jsonify(result)


@app.route("/compile/", methods=["POST"])
def compile_code():
    time = datetime.datetime.now()
    data = request.get_json()
    directory = "mount/" + "user" + str(data["userId"]) + "time" + str(int(time.timestamp()))
    os.mkdir(directory)
    output = which_run(data["whichRun"], data, directory)
    if int(flask.request.headers.get("Content-Length")) > SIZE_LIMIT:
        return "File size limit exceeded.", 413
    if output is None:
        output = ""
    if data["whichRun"] in ("runPython", "testPython"):
        save_lesson_state(data["userId"], data["lessonId"], time, data["comment"], data["pythonIn"], data["pythonTest"],
                          output, data["javaIn"], data["javaTest"], data["javaOut"])
    if data["whichRun"] in ("runJava", "testJava"):
        save_lesson_state(data["userId"], data["lessonId"], time, data["comment"], data["pythonIn"], data["pythonTest"],
                          data["pythonOut"], data["javaIn"], data["javaTest"], output)
    shutil.rmtree(directory)
    return Response(output, mimetype="text/plain")


@app.route("/save/", methods=["POST"])
def save_lesson_state(user_id, lesson_id, time, comment, p_in, p_test, p_out, j_in, j_test, j_out):
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute("INSERT INTO saves (user_id, lesson_id, time, comment, p_in, p_test, p_out, j_in, j_test,"
                        " j_out) VALUES (%(user_id)s, %(lesson_id)s, %(time)s, %(comment)s, %(p_in)s, %(p_test)s, "
                        "%(p_out)s, %(j_in)s, %(j_test)s, %(j_out)s) RETURNING save_id",
                        {"user_id": user_id, "lesson_id": lesson_id, "time": time, "comment": comment, "p_in": p_in,
                         "p_test": p_test, "p_out": p_out, "j_in": j_in, "j_test": j_test, "j_out": j_out})
            save_id = cur.fetchone()[0]
            conn.commit()
            return str(save_id)


def which_run(which, data, directory):
    if which == "runJava":
        return run_java(data["javaIn"], directory)
    if which == "testJava":
        return test_java(data["javaIn"], data["javaTest"], directory)
    if which == "runPython":
        return run_python(data["pythonIn"], directory)
    if which == "testPython":
        return test_python(data["pythonIn"], data["pythonTest"], directory)


def run_java(j_in, directory):
    with open(directory + "/Main.java", "w") as f:
        f.write(j_in)
    container = docker_d.containers.run(
        "runjava",
        mounts=[Mount("/usr/java/mount", os.path.abspath(directory), type="bind")],
        name="runjava",
        detach=True)
    return container_stop_and_kill(container, directory)


def test_java(j_in, j_test, directory):
    with open(directory + "/Main.java", "w") as f:
        f.write(j_in)
    with open(directory + "/Test.java", "w") as f:
        f.write(j_test)
    container = docker_d.containers.run(
        "testjava",
        mounts=[Mount("/usr/java/mount", os.path.abspath(directory), type="bind")],
        name="testjava",
        detach=True)
    return container_stop_and_kill(container, directory)


def run_python(p_in, directory):
    with open(directory + "/main.py", "w") as f:
        f.write(p_in)
    container = docker_d.containers.run(
        "runpython",
        mounts=[Mount("/usr/python/mount", os.path.abspath(directory), type="bind")],
        name="runpython",
        detach=True)
    return container_stop_and_kill(container, directory)


def test_python(p_in, p_test, directory):
    with open(directory + "/main.py", "w") as f:
        f.write(p_in)
    with open(directory + "/test.py", "w") as f:
        f.write(p_test)
    container = docker_d.containers.run(
        "testpython",
        mounts=[Mount("/usr/python/mount", os.path.abspath(directory), type="bind")],
        name="testpython",
        detach=True)
    return container_stop_and_kill(container, directory)


def container_stop_and_kill(container, directory):
    container.stop(timeout=TIMEOUT)
    container.reload()
    if container.attrs["State"]["ExitCode"] == 137:
        container.remove()
        return "Time limit exceeded (" + str(TIMEOUT) + " seconds).\n" + lines(directory)
    container.remove()
    return lines(directory)


def lines(directory):
    result = ""
    if os.path.getsize(directory + "/stdout.txt") > 0:
        with open(directory + "/stdout.txt", "r") as file:
            for line in file.readlines():
                result += line
    if os.path.getsize(directory + "/stderr.txt") > 0:
        result += "----------------------------------------------------------------------\n"
        with open(directory + "/stderr.txt", "r") as file:
            for line in file.readlines():
                result += line
    return result


if __name__ == '__main__':
    app.run()
