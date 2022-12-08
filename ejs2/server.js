const express = require("express");
const app = express();
const pokemon = require("./models/pokedex.json").pokemon


// set the default template extension
// app.set("view engine", "ejs")

// changes the views folder
// app.set("views", process.cwd() + "/views2")



app.post("/clicked", (req, res) => {
    res.send("<h1>You clicked the button</h1>")
})

app.get("/senddata", (req, res) => {
  const obj = {message: "Hello World"}

  res.render("senddata.ejs", {obj})

})

app.get("/senddata2", (req, res) => {
  const obj = {message: "Hello World"}

  res.json(obj)

})

app.get("/displaypokemonejs", (req, res) => {
  res.render("poke1.ejs", {pokemon})
})

app.get("/displaypokemonhttp", (req, res) => {
  res.render("poke2.ejs", {pokemon})
})

app.get("/getpokemon/:index", (req, res) => {
  res.json(pokemon[req.params.index])
})



app.get("*", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => console.log("Listening on 3000"));
