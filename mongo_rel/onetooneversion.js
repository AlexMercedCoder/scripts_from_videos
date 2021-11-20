const mongoose = require("./connection")

const addressSchema = new mongoose.Schema({
    street: String,
    state: String,
    zip: String
})

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: addressSchema
})



const Person1 = mongoose.model("Person1", personSchema)

module.exports = Person1