const express = require("express")
const app = express()
const Person1 = require("./onetooneversion")
const {Person2, Address2} = require("./onetomanyversion")
const {Person3, Address3} = require("./manytomanyversion")

app.use(express.json())

// one to one routes

app.get("/getpeople", async (req, res) => {
    const people = await Person1.find({})
    res.json(people)
})

app.post("/makeperson1", async (req, res) => {
    const newPerson = await Person1.create(req.body)
    res.json(await Person1.find({}))
})

// one to many routes
app.get("/getpeople2", async (req, res) => {
    res.json(await Person2.find({}).populate("homes"))
})

app.post("/makeperson2", async (req, res) => {
    res.json(await Person2.create(req.body))
})

app.post("/makeaddress2", async (req, res) => {
    res.json(await Address2.create(req.body))
})

app.post("/linkaddress2/:personid/:addressid", async (req, res) => {
    const person = await Person2.findById(req.params.personid)
    const address = await Address2.findById(req.params.addressid)
    person.homes.push(address)
    person.save()
    res.json(person)
})
// "61992918897f9366c0a561c7"
// "61992954c04798a53fd1a182"

// Many to Many Routes

// one to many routes
app.get("/getpeople3", async (req, res) => {
    res.json(await Person3.find({}).populate("homes"))
})

app.get("/getaddress3", async (req, res) => {
    res.json(await Address3.find({}).populate("owners"))
})

app.post("/makeperson3", async (req, res) => {
    res.json(await Person3.create(req.body))
})

app.post("/makeaddress3", async (req, res) => {
    res.json(await Address3.create(req.body))
})

app.post("/linkaddress3/:personid/:addressid", async (req, res) => {
    const {personid, addressid} = req.params
    res.json(await Person3.associate(personid, addressid))
})


app.listen(4444, () => console.log("Listening on Port 4444"))

//61992b99a72e3f135ea4f102
//61992b63a72e3f135ea4f100
