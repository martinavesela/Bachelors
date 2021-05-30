# Web application for learning a programming language using another programming language

This is the repository for my Bachelors application.

[Link to the apllications website](http://www.st.fmph.uniba.sk/~vesela50/#/)

# How to Install

## 1. Install Git Bash

This step isn't mandatory but makes the installation easier. You can use any terminal.

## 2. Install Docker Desktop

- If an error about virtualisation pops up, follow the instructions on the linked page.
- If you don't have enabled virtualisation in BIOS, do so.
- When a window appears telling you to install WSL2, follow the instructions on the linked page.

## 3. Install Python
- If the installation doesn' add Python to Path, you'll have to do it manually:
1. Open *Edit the system environmental variables*.
2. Press *Environmental Variables*.
3. In *System variables* select *path* and press *Edit*.
4. Add the path to Python.

## 4. Install PostgreSQL
- The password chosen during the installation will be used for logging in to the database.
- Add PostgreSQL to Path.

## 5. Install npm
- npm is included in Node.js installation.

## 6. Build Docker Containers
1. In folder *run-java* (path: ./server/run-java/) open Git Bash terminal.
2. Enter the following expression: `docker build -t runjava .`
3. Do this in run-python, test-java and test-python folders, but adjust the expression with *runpython*, *testjava* or *testpython*.

## 7. Running the website
- In the main folder of the application open Git Bash terminal.
- Enter the following commands:
```
nmp installreact-scripts
npm audit fix
npm start
```
- Leave the terminal open.

## 8. Running the database
- In folder *database* (path: ./server/database/) create a file *database.ini* with the following content:
```
[postgresql]
host=localhost
database=mydatabase
user=postgres
password=

```
- after *password=* enter the password you have set during the installation of PostgreSQL.
- Open Git Bash terminal in the same folder.
- Enter the following commands: (after the first one you'll be asked to enter the password)
```
psql -U postgres
CREATE DATABASE myDatabase WITH ENCODING ’UTF8’ LC\_COLLATE=’English\_United States’ LC\_CTYPE=’English\_United States’;
\c mydatabase
\i ’create\_script.sql’;
\i ’generate\_script.sql’;
```
- Leave the terminal open.

## 9. Run the application
- In folder *./server/* open Git Bash terminal.
- Enter the following commands:
```
pip install flask
pip install docker
pip install six
pip install psycopg2
python main.py
```
- Leave the terminal open.
- If the application isn't able to create files inside of *./server/mount/* folder then set it's Read-only setting to false.

## 10. Repeated runs
- For running the website you only need `npm start` command in the main folder of the application.
- For running the database you'll need the following commands:
```
psql -U postgres
\c mydatabase
```
- For running the application you only need `python main.py` command inside of *./server/* folder.
