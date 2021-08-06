import files from "files";
import { log } from "mercedlogger";
//////////////////////////////////////
// The Setup
//////////////////////////////////////
let task = () => {};
const [, , ...args] = process.argv;
const type = args[0];
const name = args[1];

//////////////////////////////////////
// Generate Controller
//////////////////////////////////////

if (type === "controller") {
  task = async () => {
    const path = `./controllers/${name}Controller.js`;
    const content = `
     //----------------------------------------
     //  Import Dependencies
     //----------------------------------------
     import { Router } from "express";
     
     //----------------------------------------
     //  Create Router
     //----------------------------------------
     const ${name}Router = Router();

     //----------------------------------------
     //  Router Middleware
     //----------------------------------------
     
     //----------------------------------------
     //  Routes
     //----------------------------------------
     ${name}Router.get("/",(req, res) => {
       res.json({ hello: "${name}" });
     });
     
     //----------------------------------------
     //  Export Router
     //----------------------------------------
     export default ${name}Router;
     `;
    await files.write(path, content);

    const Home = await files.read("./controllers/HomeController.js");
    const split = Home.split("//xxx");
    split[0] =
      split[0] + `import ${name}Controller from './${name}Controller.js'`;
    split[1] =
      split[1] + `HomeRouter.use('/${name.toLowerCase()}', ${name}Controller)`;
    const result = split.join("\n//xxx\n");
    await files.write("./controllers/HomeController.js", result);
    log.green(
      "DONE",
      "new file created in controllers folder, router registered in HomeController"
    );
  };
}

//////////////////////////////////////
// Generate Model
//////////////////////////////////////

if (type === "model") {
  task = async () => {
    const path = `./models/${name}.js`;
    const content = `
      //----------------------------------------
      //  Import Dependencies
      //----------------------------------------
      import mongoose from "../db/connection.js";
      const {Schema, model} = mongoose;
      
      //----------------------------------------
      //  New Schema
      //----------------------------------------
      
      const ${name}Schema = new Schema({}, { timestamps: true });
      
      //----------------------------------------
      //  Generate Model
      //----------------------------------------
      
      const ${name} = model("${name}", ${name}Schema)
      
      //----------------------------------------
      //  Export Module
      //----------------------------------------
      export default ${name}
       `;
    await files.write(path, content);
    log.green("DONE", "new file created in models folder");
  };
}

//////////////////////////////////////
// Generate resource
//////////////////////////////////////

if (type === "resource") {
  task = async () => {
    // Generate the Model
    let path = `./models/${name}.js`;
    let content = `
      //----------------------------------------
      //  Import Dependencies
      //----------------------------------------
      import mongoose from "../db/connection.js";
      const {Schema, model} = mongoose;
      
      //----------------------------------------
      //  New Schema
      //----------------------------------------
      
      const ${name}Schema = new Schema({}, { timestamps: true });
      
      //----------------------------------------
      //  Generate Model
      //----------------------------------------
      
      const ${name} = model("${name}", ${name}Schema)
      
      //----------------------------------------
      //  Export Module
      //----------------------------------------
      export default ${name}
       `;
    await files.write(path, content);

    // Generate the Controller
    path = `./controllers/${name}Controller.js`;
    content = `
     //----------------------------------------
     //  Import Dependencies
     //----------------------------------------
     import { Router } from "express";
     import ${name} from "../models/${name}.js";
     
     //----------------------------------------
     //  Create Router
     //----------------------------------------
     const ${name}Router = Router();

     //----------------------------------------
     //  Router Middleware
     //----------------------------------------
     
     //----------------------------------------
     //  Routes
     //----------------------------------------

     // INDEX ROUTE
     ${name}Router.get("/", async (req, res) => {
       try{
        const all = await ${name}.find({});
        res.json(all);
       } catch (error){
         console.log(error)
       }
       
     });

     // CREATE ROUTE
     ${name}Router.post("/", async (req, res) => {
       try{
        const one = await ${name}.create(req.body);
        res.json(one);
       }catch (error){
         console.log(error)
       }

     });

     // UPDATE ROUTE
     ${name}Router.put("/:id",async (req, res) => {
      try{
        const one = await ${name}.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(one);
      }catch (error){
        console.log(error)
      }

     });

     // DESTROY ROUTE
     ${name}Router.put("/:id",async (req, res) => {
      try{
        const one = await ${name}.findByIdAndRemove(req.params.id);
        res.json(one);
      }catch (error){
        console.log(error)
      }

     });

     // SHOW ROUTE
     ${name}Router.get("/:id",async (req, res) => {
      try{
        const one = await ${name}.findById(req.params.id);
        res.json(one);
      }catch (error){
        console.log(error)
      }

     });
     
     //----------------------------------------
     //  Export Router
     //----------------------------------------
     export default ${name}Router;
     `;
    await files.write(path, content);

    // Generate the Routes
    const Home = await files.read("./controllers/HomeController.js");
    const split = Home.split("//xxx");
    split[0] =
      split[0] + `import ${name}Controller from './${name}Controller.js'`;
    split[1] =
      split[1] + `HomeRouter.use('/${name.toLowerCase()}', ${name}Controller)`;
    const result = split.join("\n//xxx\n");
    await files.write("./controllers/HomeController.js", result);
    log.green(
      "DONE",
      "new files created in models and controllers, router registered in HomeController"
    );
  };
}

//////////////////////////////////////
// Generate Auth
//////////////////////////////////////

if (type === "auth") {
  task = async () => {
    // Generate the Model
    let path = `./models/User.js`;
    let content = `
    //----------------------------------------
    //  Import Dependencies
    //----------------------------------------
    import mongoose from "../db/connection.js";
    const {Schema, model} = mongoose;
    
    //----------------------------------------
    //  New Schema
    //----------------------------------------
    
    const UserSchema = new Schema({
          username: {type: String, required: true, unique: true},
          password: {type: String, required: true}
    }, { timestamps: true });
    
    //----------------------------------------
    //  Generate Model
    //----------------------------------------
    
    const User = model("User", UserSchema)
    
    //----------------------------------------
    //  Export Module
    //----------------------------------------
    export default User
       `;
    await files.write(path, content);

    // Generate the Controller
    path = `./controllers/UserController.js`;
    content = `
    //----------------------------------------
    //  Import Dependencies
    //----------------------------------------
    import { Router } from "express";
    import User from "../models/User.js";
    import jwt from "jsonwebtoken";
    import bcrypt from "bcryptjs";
    import dotenv from "dotenv";
    
    dotenv.config();
    const { SECRET = "secret" } = process.env;
    //----------------------------------------
    //  Create Router
    //----------------------------------------
    const UserRouter = Router();
    
    //----------------------------------------
    //  Router Middleware
    //----------------------------------------
    
    //----------------------------------------
    //  Routes
    //----------------------------------------
    
    // CREATE User ROUTE "/user/mew"
    UserRouter.post("/new", async (req, res) => {
      try {
        // HASH THE PASSWORD
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        // CREATE A NEW USER
        const user = await User.create(req.body);
        // SIGN A TOKEN
        const token = await jwt.sign({ username: req.body.username }, SECRET);
        // SEND TOKEN AS RESPONSE
        res.json({ token });
      } catch (error) {
        console.log(error);
      }
    });
    
    // Login Route /user/login
    UserRouter.post("/login", async (req, res) => {
      try {
        // find user in database
        const user = await User.findOne({ username: req.body.username });
        if (user) {
          //check if password matches
          const result = await bcrypt.compare(req.body.password, user.password);
          if (result) {
            //sign token and send response
            const token = await jwt.sign({ username: user.username }, SECRET);
            res.json({ token });
          } else {
            res.status(400).json({ error: "Password Doesn't match" });
          }
        } else {
          res.status(400).json({ error: "Username Not Found" });
        }
      } catch (error) {
        console.log(error);
      }
    });
    
    //----------------------------------------
    //  Export Router
    //----------------------------------------
    export default UserRouter;
     `;
    await files.write(path, content);

    //GENERATE AUTH MIDDLEWARE
    content = `
    /////////////////////////////////
// Import Dependencies
/////////////////////////////////
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const { SECRET = "secret" } = process.env;

/////////////////////////////////
// auth middleware
/////////////////////////////////
// based on a bearer token, so expected header "Authorization":"bearer <token>"
// Feel free to customize
// payload becomes avail in req.payload

const Auth = async (req, res, next) => {
  try {
    // retrieve header
    const header = req.headers.authorization;
    if (header) {
      //retrieve token
      const token = header.split(" ")[1];
      if (token) {
        //verify token
        const payload = await jwt.verify(token, SECRET);
        if (payload) {
          //add payload to request object and move on
          req.payload = payload;
          next();
        } else {
          res.status(400).json({ error: "token could not be verified" });
        }
      } else {
        res.status(400).json({
          error: "header should be in format 'Authorization': 'bearer <token>'",
        });
      }
    } else {
      res.status(400).json({ error: "no authorization header included" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export default Auth;
    `;
    await files.write("./config/auth.js", content);

    // Generate the Routes
    const Home = await files.read("./controllers/HomeController.js");
    const split = Home.split("//xxx");
    split[0] = split[0] + `import UserController from './UserController.js'`;
    split[1] =
      split[1] + `HomeRouter.use('/user', UserController)`;
    const result = split.join("\n//xxx\n");
    await files.write("./controllers/HomeController.js", result);
    log.green(
      "DONE",
      "User Model and Controller created, Auth Middleware in config folder"
    );
  };
}

task();
