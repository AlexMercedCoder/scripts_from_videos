const express = require("express");
const app = express();


// set the default template extension
// app.set("view engine", "ejs")

// changes the views folder
// app.set("views", process.cwd() + "/views2")

app.get("*", (req, res) => {
  res.render("index.ejs");
});

app.post("/clicked", (req, res) => {
    res.send("<h1>You clicked the button</h1>")
})

app.listen(3000, () => console.log("Listening on 3000"));
