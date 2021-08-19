// DEPENDENCIES
const express = require("express")
const morgan = require("morgan")

// APPLICATION OBJECT
const app = express()

// Register Middleware
app.use(morgan("tiny"))
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Routes and Routers
app.get("/", (req, res) => {
    res.render("index.ejs", {hello: "Goodbye World", color: "blue", color2: "red"})
})

app.get("/bread", (req, res) => {
    res.render("bread.ejs", {breads: ["rye", "wheat", "corn"]})
})

// listener
app.listen(process.env.PORT, console.log(`You are listening on port ${process.env.PORT}`))