-- Up
CREATE TABLE User (id INTEGER PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE, password VARCHAR(32), role_id INTEGER);
CREATE TABLE Role (id INTEGER PRIMARY KEY, role TEXT);

INSERT INTO Role (id, role) VALUES (1, 'Admin');
INSERT INTO Role (id, role) VALUES (2, 'User');
INSERT INTO Role (id, role) VALUES (3, 'Guest');

INSERT INTO User (name, email, password, role_id) VALUES ('Admin', 'admin@company.com', '21232f297a57a5a743894a0e4a801fc3', 1);
INSERT INTO User (name, email, password, role_id) VALUES ('Valerii', 'radchenkodcz@gmail.com', '25d55ad283aa400af464c76d713c07ad', 2);

-- Down
DROP TABLE User;
DROP TABLE Role;