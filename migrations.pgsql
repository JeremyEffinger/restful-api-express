DROP TABLE IF EXISTS todos;
        
CREATE TABLE todos
(
  id         serial NOT NULL,
  task       text   NOT NULL,
  details    text  ,
  difficulty int    NOT NULL,
  PRIMARY KEY (id)
);