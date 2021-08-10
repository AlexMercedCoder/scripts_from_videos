require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

////////////////////////////////////
// Connect to Database
///////////////////////////////////
mongoose.connect("mongodb://localhost:27017/organizingexpress", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/////////////////////////////////////
// Database Events
/////////////////////////////////////
mongoose.connection
.on("open", ()=> {console.log("Mongo Connection is Open")})
.on("close", ()=> {console.log("Mongo Connection is closed")})
.on("error", (error)=> {
    console.log("ERROR-----------------------------------------------------------")
    console.log(error)
    console.log("ERROR-----------------------------------------------------------")
})

//////////////////////////////////////
// Create Schema and Model
//////////////////////////////////////

const DogSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Dog = mongoose.model("Dog", DogSchema)

/////////////////////////////////////
// Express App Object
/////////////////////////////////////
const app = express()

//////////////////////////////////////
// Setup Middleware
//////////////////////////////////////
app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

/////////////////////////////////////
// Routes
/////////////////////////////////////

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/dogs", async (req, res) => {
    res.json(await Dog.find({}))
})

app.post("/dogs", async (req, res) => {
    res.json(await Dog.create(req.body))
})

//////////////////////////////////////
// Server Listener
/////////////////////////////////////
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})