const mongoose = require("./connection")

const addressSchema = new mongoose.Schema({
    street: String,
    state: String,
    zip: String,
    owners: [{type: mongoose.Types.ObjectId, ref: "Person3"}]
    
})

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    homes: [{type: mongoose.Types.ObjectId, ref: "Address3"}]
})

const Person3 = mongoose.model("Person3", personSchema)

const Address3 = mongoose.model("Address3", addressSchema)

Person3.associate = async (personid, addressid) => {
    const person = await Person3.findById(personid)
    const address = await Address3.findById(addressid)
    person.homes.push(address)
    person.save()
    address.owners.push(person)
    address.save()
    return {person, address}
}

module.exports = {Person3, Address3}