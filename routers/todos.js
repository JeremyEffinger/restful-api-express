import { Router } from "express";
import { sql } from "../app.js";

const app = Router();

app.get("/todos", (req, res, next) => {
  sql`SELECT * FROM todos`
    .then((todos) => {
      console.log("todos", todos);
      res.json(todos);
    })
    .catch(next);
});

app.post("/todos", (req, res, next) => {
  const requiredKeys = ["task", "details", "difficulty"];
  if (
    typeof req.body.difficulty === "number" &&
    requiredKeys.every((key) => req.body.hasOwnProperty(key))
  ) {
    sql`INSERT INTO todos (task, details, difficulty) VALUES (${req.body.task},${req.body.details},${req.body.difficulty}) RETURNING *;`
      .then((todo) => {
        res.status(201);
        res.json(todo[0]);
      })
      .catch(next);
  } else {
    res.status(400).send("Bad Request");
    console.log(req.body);
  }
});

export { app as default };
