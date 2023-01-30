import mongoose from "../db/connection.js";

const {Schema, model} = mongoose

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {timestamps: true})

const User = model("User", userSchema)

export default User