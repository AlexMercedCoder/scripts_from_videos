// import deps
const express = require("express")
const createHandler = require("@alexmerced/simplerpc-server")
const cors = require("cors")

// application
const app = express()

// middleware
app.use(express.json())
app.use(cors())

const todos = [{message: "Breakfast"}]

// Define actions, context and handler
const actions = {
    getTodos: (payload, context) => {
        return todos
    },
    createTodos: (payload, context) => {
        todos.push(payload)
        return todos
    }
}

const context = {

}

const handler = createHandler({actions, context})

// routes
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/rpc", (req, res) => {
    const result = handler(req.body)
    res.json(result)
})

// listener
app.listen(4000, () => console.log("listening on 4000"))

