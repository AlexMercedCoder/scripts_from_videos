//----------------------------------------
//  Import Dependencies
//----------------------------------------
import { Router } from "express";
import CatController from './CatController.js'
//xxx



//----------------------------------------
//  Create Router
//----------------------------------------
const HomeRouter = Router();

//----------------------------------------
//  Router Middleware
//----------------------------------------
HomeRouter.use('/cat', CatController)
//xxx



//----------------------------------------
//  Routes
//----------------------------------------
HomeRouter.get("/", (req, res) => {
  res.json({ hello: "world" });
});

//----------------------------------------
//  Export Router
//----------------------------------------
export default HomeRouter;
