import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.json({hello: "world"})
})

router.get("/cheese", (req, res) => {
    res.render("cheese.html", {cheese: "gouda"})
})

export default router