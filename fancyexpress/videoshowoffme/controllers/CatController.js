
     //----------------------------------------
     //  Import Dependencies
     //----------------------------------------
     import { Router } from "express";
     import Cat from "../models/Cat.js";
     
     //----------------------------------------
     //  Create Router
     //----------------------------------------
     const CatRouter = Router();

     //----------------------------------------
     //  Router Middleware
     //----------------------------------------
     
     //----------------------------------------
     //  Routes
     //----------------------------------------

     // INDEX ROUTE
     CatRouter.get("/", async (req, res) => {
       try{
        const all = await Cat.find({});
        res.json(all);
       } catch (error){
         console.log(error)
       }
       
     });

     // CREATE ROUTE
     CatRouter.post("/", async (req, res) => {
       try{
        const one = await Cat.create(req.body);
        res.json(one);
       }catch (error){
         console.log(error)
       }

     });

     // UPDATE ROUTE
     CatRouter.put("/:id",async (req, res) => {
      try{
        const one = await Cat.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(one);
      }catch (error){
        console.log(error)
      }

     });

     // DESTROY ROUTE
     CatRouter.put("/:id",async (req, res) => {
      try{
        const one = await Cat.findByIdAndRemove(req.params.id);
        res.json(one);
      }catch (error){
        console.log(error)
      }

     });

     // SHOW ROUTE
     CatRouter.get("/:id",async (req, res) => {
      try{
        const one = await Cat.findById(req.params.id);
        res.json(one);
      }catch (error){
        console.log(error)
      }

     });
     
     //----------------------------------------
     //  Export Router
     //----------------------------------------
     export default CatRouter;
     