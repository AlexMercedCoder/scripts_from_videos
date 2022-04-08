const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const Controllers = require("./controllers")
const controllers = new Controllers()

const CheeseRouter = express.Router()

// middleware
app.use("/public",express.static("public"))
app.use("/cheese", CheeseRouter)



app.get("/", controllers.index)

CheeseRouter.get("/example", controllers.example)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})