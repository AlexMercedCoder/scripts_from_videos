import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL) // connect to database

//connection messages
mongoose.connection
.on("open", () => {console.log("Mongo is Connected")})
.on("close", () => {console.log("Mongo is Disonnected")})
.on("error", (error) => {console.log(error)})

// export the connection

export default mongoose