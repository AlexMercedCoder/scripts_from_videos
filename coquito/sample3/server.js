import CoquitoApp from "coquito";
import cors from "cors";
import corsOptions from "./cors.js";
import dotenv from "dotenv";
import serverConfig from "./server-config.json" assert { type: "json" };
import methodOverride from 'method-override'
import {sessionMiddlware} from './auth/functions.js'
import {cookieParsingMiddleware} from './auth/functions.js'
import morgan from 'morgan'
import rootValue from "./graphql/rootValue.js";
import schema from "./graphql/schema.js";
import actions from "./rpc/actions.js";
import context from "./rpc/context.js";
import dogRouter from "./controllers/dog.js";
import catRouter from "./controllers/cat.js";

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
  middleware: [corsMiddleware,sessionMiddlware,cookieParsingMiddleware,morgan('dev'),methodOverride('_method')],
  // scaffold graphql api
graphql: { rootValue, schema },
  // scaffold simpleRPC api
rpc: { actions, context },
  // pass prehook for custom app configuations
  prehook,
});

// register the root route
app.app.get("/", (req, res) => {
              res.render("index.ejs")
          })
          


    // register /dog routes
dogRouter(app.dog);
    

    // register /cat routes
catRouter(app.cat);
    

// Start Server Listener
app.listen();

  