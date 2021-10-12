// import the express library
const express = require("express");

// create our app object
const app = require("liquid-express-views")(express())

// middlware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

// Routes
app.get("/", (req, res) => {
  res.render("index.liquid", {ducks: ["Huey", "Duey", "Louis"]})
});

app.get("/cheese", (req, res) => {
  res.send("Cheese!");
});

app.get("/food/:cheese/:bread", (req, res) => {
  res.json({ params: req.params, query: req.query });
});

app.post("/cheese", (req, res) => {
    res.json(req.body)
})
// turn on the listener
app.listen(65000, () => {
  console.log("Server Listening on Port 65000");
});
