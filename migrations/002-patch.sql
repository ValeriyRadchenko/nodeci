-- Up
CREATE TABLE Project (id INTEGER PRIMARY KEY, name);

INSERT INTO Project (id, name) VALUES (1, 'Initial project');

-- Down
DROP TABLE Project;