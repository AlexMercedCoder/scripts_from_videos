const {Schema, model} = require("mongoose")

const TodoSchema = new Schema({
    title: String,
    done: Boolean
})

const Todo = model("Todo", TodoSchema)

module.exports = Todo