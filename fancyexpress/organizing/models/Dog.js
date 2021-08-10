const mongoose = require("./db")

//////////////////////////////////////
// Create Schema and Model
//////////////////////////////////////

const DogSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Dog = mongoose.model("Dog", DogSchema)

module.exports = Dog