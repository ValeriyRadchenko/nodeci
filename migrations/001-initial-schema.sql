-- Up
CREATE TABLE User (id INTEGER PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE, password VARCHAR(32), role_id INTEGER);
CREATE TABLE Role (id INTEGER PRIMARY KEY, role TEXT);

INSERT INTO Role (id, role) VALUES (1, 'Admin');
INSERT INTO Role (id, role) VALUES (2, 'User');
INSERT INTO Role (id, role) VALUES (3, 'Guest');

INSERT INTO User (name, email, password, role_id) VALUES ('Admin', 'admin@company.com', '81dc9bdb52d04dc20036dbd8313ed055', 1);
INSERT INTO User (name, email, password, role_id) VALUES ('Valerii', 'radchenkodcz@gmail.com', '25d55ad283aa400af464c76d713c07ad', 2);
INSERT INTO User (name, email, password, role_id) VALUES ('test', 'test@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 2);

-- Down
DROP TABLE User;
DROP TABLE Role;
