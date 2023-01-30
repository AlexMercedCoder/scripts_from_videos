import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./controllers/auth.js"
import noteRouter from "./controllers/note.js"

// read .env file
dotenv.config()

// create express app
const app = express()

// register middleware
app.use(cors({
    origin : "http://localhost:3000" ,
    credentials : true ,
    methods: ["GET", "PUT", "POST", "DELETE"]
  })) // allow external requests
app.use(morgan("dev")) // logging
app.use(express.json()) // parse json bodies
app.use(cookieParser())


// routes and routers

// test route
app.get("/test", (req, res) => {
    res.send("server is working")
})
app.use("/auth", authRouter)
app.use("/note", noteRouter)

// listen - turn on server
const PORT = process.env.PORT || 4444
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})


