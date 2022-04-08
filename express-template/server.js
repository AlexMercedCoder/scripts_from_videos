// *********************************
// Enabling Enviromental Variables
// *********************************
import dotenv from "dotenv"
dotenv.config()

// *********************************
// Import Dependencies
// *********************************
import express from "express"
import methodOverride from "method-override"
import cors from "cors"
import morgan from "morgan"
import MainController from "./controllers/MainController.js"
import APIController from "./controllers/APIController.js"

// *********************************
// Global Variables & Controller Instantiation
// *********************************
const PORT = process.env.PORT || 3333
const mainController = new MainController()
const apiController = new APIController()

// *********************************
// Creating Application Object
// *********************************
const app = express()

// *********************************
// Routers
// *********************************
const MainRoutes = express.Router()
const APIRoutes = express.Router()

// *********************************
// Middleware
// *********************************
// Global Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride("_method"))
app.use("/static", express.static("static"))
app.use(morgan("tiny"))
app.use("/", MainRoutes)
app.use("/api", APIRoutes)
// Router Specific Middleware
APIRoutes.use(cors())

// *********************************
// Routes that Render Pages with EJS
// *********************************
MainRoutes.get("/", mainController.example) // "/"

// *********************************
// API Routes that Return JSON
// *********************************
APIRoutes.get("/", apiController.example) //"/api"

// *********************************
// Server Listener
// *********************************
app.listen(PORT, () => console.log(`👂Listening on Port ${PORT}👂`))