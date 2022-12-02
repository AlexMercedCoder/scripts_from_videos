const todos = [{message: "Breakfast"}]

const actions = {
    getTodos: (payload) => todos,
    createTodo: (payload) => {
        const newTodo = {
            message: payload.message
        }
        todos.push(newTodo)
        return {result: "success"}
    }
}

module.exports = actions