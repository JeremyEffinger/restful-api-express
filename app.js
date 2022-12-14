import express from "express";
import postgres from "postgres";
import home from "./routers/home.js";
import todos from "./routers/todos.js";

const app = express(); // assign the express function to the varriable app
const port = 3000; //set port that the server will run on.

//Connect to the database, and grab username and password from .env file.
export const sql = postgres({
  database: "tasks",
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

app.use(express.json()); //let the app know what to do with content type application/json

/* Start of routes*/
app.use(home);
app.use(todos);
/* end of routes*/

//start the app running and listening on the assigned port.
app.listen(port, () => {
  console.log(`todo app listening on port ${port}`);
});
