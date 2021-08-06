import express from "express";
import swagger from "swagger-express-router";
import swaggerui from "swagger-ui-express"
import apiDocs from "./swagger.json";
import controllers from "./controllers/index.js";
import configs from "./configs/index.js";
import morgan from "morgan";
import cors from "cors"
import {log} from "mercedlogger";

//CREATE APP OBJECT
const app = express();

//middleware
app.use(configs.env.NODE_ENV === "production" ? cors(configs.cors) : cors()); //CORS
app.use(morgan("tiny")); // LOGGING
app.use(configs.context); // CREATE request.context

//setup routes and swagger UI
app.use("/docs", swaggerui.serve)
app.get("/docs", swaggerui.setup(apiDocs))
swagger.setUpRoutes(controllers, app, apiDocs, configs.env.USEBASEPATH);

app.listen(configs.env.PORT, () =>
  log.green(`Listening on port ${configs.env.PORT}`)
);
