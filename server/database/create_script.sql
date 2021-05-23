DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users
(
    user_id  SERIAL PRIMARY KEY,
    nickname VARCHAR(32) UNIQUE DEFAULT '' NOT NULL,
    password VARCHAR(32)        DEFAULT '' NOT NULL
);

DROP TABLE IF EXISTS lessons CASCADE;
CREATE TABLE lessons
(
    lesson_id   SERIAL PRIMARY KEY,
    name        TEXT    DEFAULT ''    NOT NULL,
    text        TEXT    DEFAULT ''    NOT NULL,
    solution    TEXT    DEFAULT ''    NOT NULL,
    p_in        TEXT    DEFAULT ''    NOT NULL,
    p_test      TEXT    DEFAULT ''    NOT NULL,
    j_in        TEXT    DEFAULT ''    NOT NULL,
    j_test      TEXT    DEFAULT ''    NOT NULL,
    p_in_lock   BOOLEAN DEFAULT FALSE NOT NULL,
    p_test_lock BOOLEAN DEFAULT FALSE NOT NULL,
    j_in_lock   BOOLEAN DEFAULT FALSE NOT NULL,
    j_test_lock BOOLEAN DEFAULT FALSE NOT NULL
);

DROP TABLE IF EXISTS saves CASCADE;
CREATE TABLE saves
(
    save_id   SERIAL PRIMARY KEY,
    user_id   INTEGER REFERENCES users           NOT NULL,
    lesson_id INTEGER REFERENCES lessons         NOT NULL,
    time      TIMESTAMP DEFAULT now()::TIMESTAMP NOT NULL,
    comment   TEXT      DEFAULT ''               NOT NULL,
    p_in      TEXT      DEFAULT ''               NOT NULL,
    p_test    TEXT      DEFAULT ''               NOT NULL,
    p_out     TEXT      DEFAULT ''               NOT NULL,
    j_in      TEXT      DEFAULT ''               NOT NULL,
    j_test    TEXT      DEFAULT ''               NOT NULL,
    j_out     TEXT      DEFAULT ''               NOT NULL
);