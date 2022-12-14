import { Router } from "express";

const app = Router();

export default app.get("/", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.status(200);
  res.send("Welcome the todo api");
});
