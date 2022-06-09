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

    // search for all dogs
    // const dog = await Dog.find({})

    // search for one dog by id
    // const dog = await Dog.findById("62a14e4e552247f3b540046f")

    // search for one dog by other properties
    // const dog = await Dog.findOne({name: "Ralph"})
    // const dog = await Dog.findOne({age: {$gt: 3}})

    // Update ralph using findAndUpdate
    // const dog = await Dog.findByIdAndUpdate("62a14e4e552247f3b540046f", {age: 4}, {new: true})
    // const dog = await Dog.updateOne({name: "Ralph"}, {age: 9}, {new: true})

    // update the individual dog direct
    const dog = await Dog.findOne({name: "Ralph"})
    dog.age = 13
    await dog.save()

    // log the dog
    console.log(dog)

    // Close the Connection
    mongoose.connection.close()

})