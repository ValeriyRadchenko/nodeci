-- Up
CREATE TABLE Project (id INTEGER PRIMARY KEY, name VARCHAR(255), user_id INTEGER);

INSERT INTO Project (id, name, user_id) VALUES (1, 'Initial project', 1);

-- Down
DROP TABLE Project;