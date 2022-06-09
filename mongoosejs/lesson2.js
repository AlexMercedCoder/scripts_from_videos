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

// Create a Schema
const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    tag: {type: Number, unique: true, required: true}
}, {timestamps: true})

// Create a Model
const Dog = mongoose.model("Dog", dogSchema)

// Run Some Queries
mongoose.connection.on("open", async () => {

    //add a dog
    const dog = await Dog.create({name: "Ralph", age: 6, tag: 1})

    // log the dog
    console.log(dog)

    // Close the Connection
    mongoose.connection.close()

})

