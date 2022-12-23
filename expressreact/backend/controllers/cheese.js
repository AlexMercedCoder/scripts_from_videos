import express from "express";
import Cheese from "../models/cheese.js";

const router = express.Router()

const catcher = (res) => (error) => res.status(400).json({error}) 


// "/cheese" - "index route"
router.get("/", async (req, res) => {
   const cheeses = await Cheese.find({}).catch(catcher(res))
   console.log(cheeses)
   res.json(cheeses)
})

// "/cheese/:id" - "show route"
router.get("/:id", async (req, res) => {
    const cheese = await Cheese.findById(req.params.id).catch(catcher(res))
    res.json(cheese)
 })

// "/cheese" - "create route"
router.post("/", async (req, res) => {
    const cheese = await Cheese.create(req.body).catch(catcher(res))
    res.json(cheese)
 })

// "/cheese/:id" - "update route"
router.put("/:id", async (req, res) => {
    const cheese = await Cheese.findByIdAndUpdate(req.params.id, req.body).catch(catcher(res))
    res.json(cheese)
 })

// "/cheese/:id" - "delete route"
router.delete("/:id", async (req, res) => {
    const cheese = await Cheese.findByIdAndRemove(req.params.id).catch(catcher(res))
    res.json(cheese)
 })

export default router