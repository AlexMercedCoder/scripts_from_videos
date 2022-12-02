// Import deps
const express = require("express")
const morgan = require("morgan")
const actions = require("./actions")

// Create app object
app = express()


// register middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static("public"))


// register routes
app.get("/", (req, res) => {
    res.send("It works!")
})

// RPC ENDPOINT
app.post("/rpc", (req, res) => {

    console.log(req.body)

    const result = actions[req.body.type](req.body.payload)

    res.send(result)
})


// start server
app.listen(4444, () => console.log("Listening on Port 4444"))