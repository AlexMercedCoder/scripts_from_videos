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

app.get("/styling", (req, res) => {
    res.render("styling.ejs", {})
})

// listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`You are listening on port ${PORT}`))