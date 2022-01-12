const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware

app.use(cors());
app.use(express.json());

//ROUTES//

app.post("/usersdb", async (req, res) => {
  try {
    const { description } = req.body;
    const newToDo = await pool.query(
      "INSERT INTO users (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newToDo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/usersdb", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM users");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/usersdb/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM users WHERE users_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/usersdb/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateusers = await pool.query(
      "UPDATE users SET description = $1 WHERE users_id = $2",
      [description, id]
    );
    res.json("Users updated!");
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/usersdb/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteusers = await pool.query(
      "DELETE FROM users WHERE users_id = $1",
      [id]
    );
    res.json("User Deleted!");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
