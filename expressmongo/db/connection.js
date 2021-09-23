require("dotenv").config()
const mongoose = require("mongoose")

// CONNECT TO MONGO
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// CONNECTION MESSAGES
mongoose.connection
.on("open", () => {console.log("Connected to Mongo")})
.on("close", () => {console.log("disconnected from Mongo")})
.on("error", (error) => {console.log(error)})

// export the connection
module.exports = mongoose