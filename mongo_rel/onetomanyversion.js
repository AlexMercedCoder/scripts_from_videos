const mongoose = require("./connection")

const addressSchema = new mongoose.Schema({
    street: String,
    state: String,
    zip: String,
    
})

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    homes: [{type: mongoose.Types.ObjectId, ref: "Address2"}]
})

const Person2 = mongoose.model("Person2", personSchema)

const Address2 = mongoose.model("Address2", addressSchema)

module.exports = {Person2, Address2}

