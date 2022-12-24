import mongoose, { model } from "mongoose"

const DATABASE_URL = process.env.DATABASE_URL

function GiftConnection(){
    mongoose.connect(DATABASE_URL)

    mongoose.connection.on("open", () => console.log("Connected"))

    return mongoose.models.Gift || model("Gift", new mongoose.Schema({
        title: String,
        value: Number
    }, {timestamps: true}))
}

export default GiftConnection