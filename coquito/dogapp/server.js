import CoquitoApp from "coquito";
import cors from "cors";
import corsOptions from "./cors.js";
import dotenv from "dotenv";
import serverConfig from "./server-config.json" assert { type: "json" };
import dogRouter from "./controllers/dog.js";

  // bring in .env variables
  dotenv.config()

  // if production, use cors options, if not, allow all requests for development
const corsMiddleware =
  process.env.NODE_ENV === "production" ? cors(corsOptions) : cors();

  // use pre-hook for any configurations of app objects to occur before middleware/routers
const prehook = (app) => {}

// create application
const app = new CoquitoApp({
 ...serverConfig,
  // register other middleware for cors
  middleware: [corsMiddleware, ],
  
  
  // pass prehook for custom app configuations
  prehook,
});

// register the root route
app.app.get("/", (req, res) => {
              res.render("index.ejs")
          })
          


    // register /dog routes
dogRouter(app.dog);
    

// Start Server Listener
app.listen();

  