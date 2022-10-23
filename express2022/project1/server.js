// import express
const express = require("express")

// create the application object
const app = express()

// register a middleware step (in between step)
app.use((request, response, next) => {
    console.log(request.url)
    next()
})

// register a route (end step)
app.get("/", (request, response) => {
    response.send({message: "hello"})
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})