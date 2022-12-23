import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config() // get dotenv vars

const DATABASE_URL = process.env.DATABASE_URL

console.log(DATABASE_URL)

// connect
mongoose.connect(DATABASE_URL)

// connection message
mongoose.connection
.on("open", () => console.log(`connected to mongo db`))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

export default mongoose