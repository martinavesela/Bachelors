# Web application for learning a programming language using another programming language

This is the repository for my Bachelors application.

[Link to the applications website](http://www.st.fmph.uniba.sk/~vesela50/#/)

# How to Install and Run

## 1. Programs you need to install:
- Docker Desktop
- Python
- PostgreSQL
- npm

## 2. Build Docker Containers
- In folder ./server/run-java/ open terminal and enter `docker build -t runjava .`. Do this in run-python, test-java and test-python folders, but adjust the expression with *runpython*, *testjava* or *testpython*.

## 3. Prepare the website
- Enter the following commands in the main folder of the application:
```
nmp install react-scripts
npm audit fix
```

## 4. Prepare the database
- In folder ./server/database/ create a file *database.ini* with the following content:
```
[postgresql]
host=localhost
database=mydatabase
user=postgres
password=

```
- after *password=* enter the password you have set during the installation of PostgreSQL.
- Enter the following commands in the same folder:
```
psql -U postgres
CREATE DATABASE myDatabase WITH ENCODING ’UTF8’ LC\_COLLATE=’English\_United States’ LC\_CTYPE=’English\_United States’;
\c mydatabase
\i ’create\_script.sql’;
\i ’generate\_script.sql’;
```

## 5. Install needed Python modules
- Enter the following commands in the ./server/ folder:
```
pip install flask
pip install docker
pip install six
pip install psycopg2
```

## 6. Running the application
- For running the website enter `npm start` command in the main folder of the application.
- For running the database enter the following commands:
```
psql -U postgres
\c mydatabase
```
- For running the application enter `python main.py` command inside of *./server/* folder.
