//----------------------------------------
//  Import Dependencies
//----------------------------------------
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "./config/cors.js";
import { log } from "mercedlogger";
import HomeController from "./controllers/HomeController.js";

//----------------------------------------
//  Variables
//----------------------------------------
dotenv.config();
const PORT = process.env.PORT || 4500;

//----------------------------------------
//  Initiate Application
//----------------------------------------
const app = express();

//----------------------------------------
//  Middleware
//----------------------------------------
app.use(cors);
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//----------------------------------------
//  HomeController
//----------------------------------------

app.use("/", HomeController);

//----------------------------------------
//  Launch Server
//----------------------------------------
app.listen(PORT, () =>
  log.green("SERVER:", `🤩 Server Running on Port ${PORT} 🤩`)
);
