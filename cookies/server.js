const express = require("express")
const app = express()
const cp = require("cookie-parser")
const jwt = require("jsonwebtoken")


app.use(cp())

// Set the Cookie
app.get("/set/cookie", (req, res) => {

    const payload = {
        name: "Alex Merced",
        age: "36",
        website: "AlexMercedCoder.com"
    }

    const token = jwt.sign(payload, "logrocket")

    res.cookie("token", token, {
        httpOnly: true
    }).send("Cookie Shipped")
})

// return all headers
app.get("/get/cookie", (req, res) => {

    const token = req.cookies.token

    const payload = jwt.verify(token, "logrocket")

    res.json({
        token, payload
    })
})





app.listen(3555, () =>  console.log("Listening on Port 3555"))