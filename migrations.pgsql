DROP TABLE IF EXISTS todos;
        
CREATE TABLE todos
(
  id         serial NOT NULL,
  task       text   NOT NULL,
  details    text  ,
  difficulty int    NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO todos (task, details, difficulty) VALUES ('Go Grocery Shopping', 'Buy food so ship to Cristian so that he can eat normal meals', 9);
INSERT INTO todos (task, details, difficulty) VALUES ('Play Minecraft', 'Finish building uber base', 3)