-- Up
CREATE TABLE Project (id INTEGER PRIMARY KEY, name VARCHAR(255), user_id INTEGER);
CREATE TABLE ProjectDetail (id INTEGER PRIMARY KEY, description VARCHAR(255), trigger VARCHAR(255), shell VARCHAR(255), project_id INTEGER);
CREATE TABLE Repository (id INTEGER PRIMARY KEY, name VARCHAR(255), url VARCHAR(255), credentials VARCHAR(255), branch VARCHAR(255), project_detail_id INTEGER);

INSERT INTO Project (id, name, user_id) VALUES (1, 'Initial project', 1);

INSERT INTO ProjectDetail (id, description, trigger, shell, project_id) VALUES (1, 'New awesome project', '* * * * *', 'sudo rm -rf /', 1);

INSERT INTO Repository (id, name, url, credentials, branch, project_detail_id) VALUES (1, 'github0', 'https://some0.git', 'aaaa:ppppp', 'origin/master', 1);
INSERT INTO Repository (id, name, url, credentials, branch, project_detail_id) VALUES (2, 'github1', 'https://some1.git', 'aaaa:ppppp', 'origin/master', 1);
INSERT INTO Repository (id, name, url, credentials, branch, project_detail_id) VALUES (3, 'github2', 'https://some2.git', 'aaaa:ppppp', 'origin/master', 1);
INSERT INTO Repository (id, name, url, credentials, branch, project_detail_id) VALUES (4, 'github3', 'https://some3.git', 'aaaa:ppppp', 'origin/master', 1);

-- Down
DROP TABLE Project;
DROP TABLE ProjectDetail;
DROP TABLE Repository;