// our dependencies
require("dotenv").config() // make env variables available
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const TodoRouter = require("./controllers/todo")
const UserRouter = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo")

// create app object
const app = require("liquid-express-views")(express())

//setup middleware
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE_URL,
        // mongoOptions: advancedOptions // See below for details
      })
    // cookie: { secure: true }
  }))

// routes
app.get("/", (req, res) => {
    res.render("index.liquid", {main: true})
})

app.use("/todos", TodoRouter)
app.use("/auth", UserRouter)

app.get("/error", (req, res) => {
    const error = req.query.error || "This Page Does Not Exist"

    res.render("error.liquid", {error})
})

app.all("*", (req, res) => {
    res.redirect("/error")
})

// setup app listener
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})