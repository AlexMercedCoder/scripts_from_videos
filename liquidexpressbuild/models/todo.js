// import what I need
const { Schema, model } = require("./connection");

// create the schema
const TodoSchema = new Schema(
  {
    action: String,
    completed: { type: Boolean, required: true, default: false },
    username: String,
  },
  { timestamps: true }
);

// creat the model
const Todo = model("Todo", TodoSchema);

// export the model
module.exports = Todo;
