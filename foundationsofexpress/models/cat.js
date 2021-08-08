import mongoose from "./connection.js"

const CatSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Cat = mongoose.model("cat", CatSchema)

export default Cat