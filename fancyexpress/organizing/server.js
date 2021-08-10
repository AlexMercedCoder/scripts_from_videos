require("dotenv").config();
const express = require("express");
const GlobalMiddleware = require("./middleware/GlobalMiddleware")
const RootRouter = require("./controllers/root")

/////////////////////////////////////
// Express App Object
/////////////////////////////////////
const app = express()

////////////////////////
// Register Middle
///////////////////////
GlobalMiddleware(app)

/////////////////////////////////////
// Routes
/////////////////////////////////////
app.use("/", RootRouter)

//////////////////////////////////////
// Server Listener
/////////////////////////////////////
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})