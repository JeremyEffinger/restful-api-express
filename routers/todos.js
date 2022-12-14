import { Router } from "express";
import { sql } from "../app.js";

const app = Router();

export default app.get("/todos", (req, res, next) => {
  sql`SELECT * FROM todos`
    .then((todos) => {
      console.log("todos", todos);
      res.json(todos);
    })
    .catch(next);
});
