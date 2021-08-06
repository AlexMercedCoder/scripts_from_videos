const mongoose = require("mongoose")

//connect to the database
mongoose.connect("mongodb://localhost:27017/mypracticedb", {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

// events
db.on("open", () => { console.log("CONNECTED TO MONGODB")})
db.on("close", () => {console.log("DISCONNECTED")})
db.on("error", (error) => {console.log("There is an error:", error)})

// Create a Cat Model
// Step 1 is create a schema
// Step 2 creat the model

const {Schema, model} = mongoose

const PersonSchema = new Schema ({
    name: String,
    age: Number
})

const CatSchema = new Schema({
    name: {type: String, unique: true, required: true},
    age: Number,
    owner: {type: mongoose.Types.ObjectId, ref: "Person"}
})



const Cat = model("Cat", CatSchema)
const Person = model("Person", PersonSchema)


/////////////////////////////////////////////

const query = async () => {
    
    const cats = await Cat.find({age: {$gt: 6}}).populate("owner")

    console.log(cats)

    mongoose.disconnect()
}

query()

/////////////////////////////////////////////

