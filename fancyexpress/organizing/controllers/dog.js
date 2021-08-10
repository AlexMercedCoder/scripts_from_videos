const {Router} = require("express")
const router = Router()

console.log("DogRouter")

router.get("/", async (req, res) => {
    console.log("GET ROUTE")
    res.json(await req.context.models.Dog.find({}))
})

router.post("/", async (req, res) => {
    console.log("POST ROUTE")
    res.json(await req.context.models.Dog.create(req.body))
})


module.exports = router