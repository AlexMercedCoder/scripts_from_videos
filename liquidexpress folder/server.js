// import deps
const express = require("express")
const liquidjs = require("liquidjs")
const app = express()

// setup liquid view engine
const engine = new liquidjs.Liquid()
app.engine("liquid", engine.express())


// route
app.get("/", (req, res) => {
    res.render("index.liquid", {greeting: "Goodbye World", show: true, nums: [1,2,3,4,5,6]})
})


// app listener
app.listen(2021, () =>  console.log("listening on port 2021"))





