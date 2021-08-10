const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 4000

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
})
app.use(cors())

app.get("/getdata", (req, res) => {
    // all logic to get data here
    res.json(data)
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})