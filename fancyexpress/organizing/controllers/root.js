const {Router} = require("express")
const router = Router()
const DogRouter = require("./dog")

router.use("/dogs", DogRouter)

router.get("/", (req, res) => {
    res.send("hello world")
})


module.exports = router