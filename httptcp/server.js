const express = require("express")
const app = express()

app.all("/", express.json(), (request, response) => {

    const {headers, url, method, hostname, body} = request

    response.json({
        headers, url, method, hostname, body
    })
})


app.listen(65000, () => {console.log("Listening on Port 65000")} )