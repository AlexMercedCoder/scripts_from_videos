import { Router } from "express";
import Cat from "../models/cat.js"

const router = Router()


// "/cat/all"
router.get("/all", async (req, res) => {
    const cats = await Cat.find({})
    res.json(cats)
})

// "/cat/make?name=xxxxx&age=xxxx"
router.get("/make", async(req, res) => {

    const name = req.query.name
    const age = parseInt(req.query.age)

    const cat = await Cat.create({name, age})

    res.json(cat)

})


export default router