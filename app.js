import express from "express";
import postgres from "postgres";

const app = express();
const port = 3000;

const sql = postgres({
  database: "tasks",
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

app.use(express.json());

app.listen(port, () => {
  console.log(`todo app listening on port ${port}`);
});
