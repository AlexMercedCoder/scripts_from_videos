const express = require("express");
const app = express();

app.locals.cheese = "gouda"

app.all(
  "/bread",
  (req, res, next) => {
    req.l
    console.log(req.app.locals.cheese);
    next();
  },
  (req, res) => {
    res.json({
      url: req.url,
      headers: req.headers,
      body: req.body,
      queries: req.query,
    });
  }
);

app.route("/super")
.get((req, res) => {res.send(req.method)})
.post((req, res) => {res.send(req.method)})
.put((req, res) => {res.send(req.method)})
.delete((req, res) => {res.send(req.method)})

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/todos/:id", (req, res) => {
  res.send(req.params);
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "No Route for this Request",
    method: req.method,
    headers: req.headers,
    body: req.body,
    queries: req.query,
    status: res.statusCode,
  });
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
