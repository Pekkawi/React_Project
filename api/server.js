const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./models/Todo");

const app = express(); //create an express app

app.use(express.json()); //it will allow to use content type of application called json
app.use(cors());
mongoose
  .connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

app.get("/todos", async (req, res) => {
  const todos = await Todos.find();
  res.json(todos);
});
