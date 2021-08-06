//----------------------------------------
//  Import Dependencies
//----------------------------------------
import mongoose from "mongoose";
import dotenv from "dotenv";
import {log} from "mercedlogger"

//----------------------------------------
//  Variables
//----------------------------------------
dotenv.config()
const { DATABASE_URL = "mongodb://localhost:27017/database" } = process.env;
const CONFIG = { useNewUrlParser: true, useUnifiedTopology: true };

//----------------------------------------
//  Establish Connection
//----------------------------------------
mongoose.connect(DATABASE_URL, CONFIG);

//----------------------------------------
//  Connection Message
//----------------------------------------
mongoose.connection
.on("open", () => log.green("DB", "🧠 database is connected 🧠"))
.on("close", () => log.red("DB", "💔 database is disconnected 💔"))
.on("error", (error) => log.red("DB", `💣 ${error} 💣`))

//----------------------------------------
//  Export Connection
//----------------------------------------
export default mongoose