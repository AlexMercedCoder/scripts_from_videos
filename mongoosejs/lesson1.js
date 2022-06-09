// load dotenv vars
require("dotenv").config()
// import mongoose
const mongoose = require("mongoose")

// Establish Connection
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI)

// Messages
mongoose.connection
.on("open", () => {console.log("You Are Connected to Mongo")})
.on("close", () => {console.log("You Are Disconnected from Mongo")})
.on("error", (error) => {console.log(error)})

// Close the Connection
mongoose.connection.close()