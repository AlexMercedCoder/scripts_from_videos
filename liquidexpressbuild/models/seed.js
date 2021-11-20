const mongoose = require("./connection")
const Todo = require("./todo")

// save the connection in a variable
const db = mongoose.connection

// run seed code when connection opens
db.on("open", () => {

    // Delete all the existing todos
    Todo.deleteMany({})
    .then(() => {

        // seed data
        const seedData = [
            {action: "Eat Breakfast"},
            {action: "Eat Lunch"},
            {action: "Eat Dinner"},
            {action: "Eat Brunch"},
            {action: "Eat Food"},
        ]

        // create new todos from seed data
        Todo.create(seedData)
        .then((todos) => {
            console.log(todos)
            db.close()
        })


    })

})