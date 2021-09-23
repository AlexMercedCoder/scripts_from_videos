const express = require("express");
const morgan = require("morgan");
const db = require("./db/connection");
const app = express();
const Todo = require("./models/Todo");

app.get("/", (req, res) => {
  Todo.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ error });
    });
});

app.listen(4000, () => console.log("listening on port 4000"));
