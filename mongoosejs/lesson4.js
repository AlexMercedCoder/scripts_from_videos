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

// Owner
const ownerSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {timestamps: true})
const Owner = mongoose.model("Owner", ownerSchema)


// Create a Schema
const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    tag: {type: Number, unique: true, required: true},
    owner: {type: mongoose.Types.ObjectId, ref: "Owner"}
}, {timestamps: true})

// Create a Model
const Dog = mongoose.model("Dog", dogSchema)

// Run Some Queries
mongoose.connection.on("open", async () => {

    // Create an Owner
    // const owner = await Owner.create({name: "Alex Merced", age: 36})

    // Create a Dog
    // const dog = await Dog.create({name: "Ralph", age: 7, tag: 1, owner: owner})

    // search for Ralph
    const dog = await Dog.findOne({name: "Ralph"}).populate("owner")

    console.log(dog)

    // Close the Connection
    mongoose.connection.close()

})