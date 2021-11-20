const express = require("express")
const app = express()


app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.listen(3000, () => {console.log("listening on port 3000")})

app.post("/test", (req, res) => {
    res.json(req.body)
})