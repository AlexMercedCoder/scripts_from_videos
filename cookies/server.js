const express = require("express")
const app = express()
const cp = require("cookie-parser")


app.use(cp())

// Set the Cookie
app.get("/set/cookie", (req, res) => {
    // res.setHeader("Set-Cookie", "hello=world; Path=/; HttpOnly")

    res.cookie("token", jwt, {
        httpOnly: true
    }).send("Cookie Shipped")
})

// return all headers
app.get("/get/cookie", (req, res) => {
    res.json(req.cookies)
})





app.listen(3555, () =>  console.log("Listening on Port 3555"))