import express from "express"
import morgan from "morgan"
import path from "path"
import { compile, escape } from "boxwood"
import createRender from "express-boxwood"
import cors from "cors"
import dotenv from "dotenv"
import MainRouter from "./controllers/MainRouter.js"
import CatRouter from "./controllers/CatRouter.js"

dotenv.config()


// create an application
const app = express()

// create view engine
const render = createRender({
    compile,
    escape,
    cacheEnabled: process.env.NODE_ENV === 'production',
    compilerOptions: {
      paths: [
        path.join("./", 'views'),
        path.join("./", 'public')
      ]
    },
    globals (path, options) {
      return { domain: 'https://foo.bar' }
    }
  })

// set views path
app.set('views', path.join("./", 'views'))

// set the view engine
app.engine('html', render)

// global middleware
app.use(morgan("tiny")) //logging
app.use(cors()) // cors headers

// routes and routers
app.use("/", MainRouter)
app.use("/cat", CatRouter)


// server listener
app.listen(process.env.PORT, () => console.log("Listening on Port 7000"))