import { Router } from "express";

const app = Router();

app.get("/", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.status(200);
  res.send("Welcome the todo api");
});

export { app as default };
