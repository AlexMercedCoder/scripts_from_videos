import CoquitoApp from "coquito";
import morgan from "morgan";
import cors from "cors";
import corsOptions from "./cors.js";
import dotenv from "dotenv";
import actions from "./rpc/actions.js";
import context from "./rpc/context.js";
import rootValue from "./graphql/rootValue.js";
import schema from "./graphql/schema.js";
import router1 from "./controllers/router1.js";
import router2 from "./controllers/router2.js";

// load .env variables
dotenv.config();

// if production, use cors options, if not, allow all requests for development
const corsMiddleware =
  process.env.NODE_ENV === "production" ? cors(corsOptions) : cors();

// use pre-hook to set view engine so we don't have to view file extensions
const prehook = (app) => app.set("view engine", "ejs");

// create application
const app = new CoquitoApp({
  // set name of public folder
  static: "public",
  // enable json and urlencoded body parsers
  bodyparsers: true,
  // register other middleware for cors and logging
  middleware: [corsMiddleware, morgan("dev")],
  // define routers
  routers: ["/router1","/router2"],
  // scaffold graphql api
  graphql: { rootValue, schema },
  // scaffold simpleRPC api
  rpc: { actions, context },
  // define port
  port: 4000,
  // define host
  host: "localhost",
  // pass prehook for custom app configuations
  prehook,
});

// register the root route
app.app.get("/", (req, res) => {
  res.render("index");
});

// register router1 routes
router1(app.router1);
//register router2 routes
router2(app.router2);

// Start Server Listener
app.listen();
