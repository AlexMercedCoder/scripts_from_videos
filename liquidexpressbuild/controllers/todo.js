// dependencies
const express = require("express");
const Todo = require("../models/todo");
const { auth } = require("./middleware");
// router
const router = express.Router();

// router wide middleware
router.use(auth);

// routes

// index route - get all the todos
router.get("/", (req, res) => {
  Todo.find({ username: req.session.username })
    .then((todos) => {
      res.render("todos/index.liquid", { todos });
    })
    .catch((error) => {
      res.redirect(`/error?error=${error}`);
    });
});

// new route - render page with create form
router.get("/new", (req, res) => {
  res.render("todos/new.liquid");
});

// create route - to create a new todo
router.post("/", (req, res) => {
  req.body.username = req.session.username;

  Todo.create(req.body)
    .then((todo) => {
      res.redirect("/todos");
    })
    .catch((error) => {
      res.redirect(`/error?error=${error}`);
    });
});

// edit route - page with a form to edit
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then((todo) => {
      res.render("todos/edit.liquid", { todo });
    })
    .catch((error) => {
      res.redirect(`/error?error=${error}`);
    });
});

// update route - the route the handle the submission of the edit form
router.put("/:id", (req, res) => {
  req.body.completed = req.body.completed === "on" ? true : false;
  const id = req.params.id;

  Todo.findByIdAndUpdate(id, req.body, { new: true })
    .then((todo) => {
      res.redirect("/todos");
    })
    .catch((error) => {
      res.redirect(`/error?error=${error}`);
    });
});

// delete route - the route that handles deleting an item by it's id
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndRemove(id)
    .then((todo) => {
      res.redirect("/todos");
    })
    .catch((error) => {
      res.redirect(`/error?error=${error}`);
    });
});

// show route - get a single todo
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then((todo) => {
      res.render("todos/show.liquid", { todo });
    })
    .catch((error) => {
      res.redirect(`/error?error=${error}`);
    });
});

// export the router
module.exports = router;
