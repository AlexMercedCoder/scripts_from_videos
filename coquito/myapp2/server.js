import CoquitoApp from "coquito";
import cors from "cors";
import corsOptions from "./cors.js";
import dotenv from "dotenv";
import serverConfig from "./server-config.json" assert { type: "json" };
import rootValue from "./graphql/rootValue.js";
import schema from "./graphql/schema.js";
import actions from "./rpc/actions.js";
import context from "./rpc/context.js";
import consolidate from "consolidate";
import dogRouter from "./controllers/dog.js";
import catRouter from "./controllers/cat.js";

  // bring in .env variables
  dotenv.config()

  // if production, use cors options, if not, allow all requests for development
const corsMiddleware =
  process.env.NODE_ENV === "production" ? cors(corsOptions) : cors();

  // use pre-hook for any configurations of app objects to occur before middleware/routers
const prehook = (app) => {
            // assign the nunjucks engine to .nunjucks files
app.engine('nunjucks', consolidate["nunjucks"]);

// set .nunjucks as the default extension
app.set('view engine', 'nunjucks');
        }

// create application
const app = new CoquitoApp({
 ...serverConfig,
  // register other middleware for cors
  middleware: [corsMiddleware],
  
  // scaffold graphql api
  graphql: { rootValue, schema },
  
  
  // scaffold simpleRPC api
  rpc: { actions, context },
  
  // pass prehook for custom app configuations
  prehook,
});

// register the root route
app.app.get("/", (req, res) => {
              res.render("index.nunjucks")
          })
          


    // register /dog routes
dogRestRouter(app.dog);
    

    // register /cat routes
catRestRouter(app.cat);
    

// Start Server Listener
app.listen();

  