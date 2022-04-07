const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use("/public",express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", {name: "Alex Merced"} )
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})