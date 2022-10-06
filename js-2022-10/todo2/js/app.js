const state = {
    todos: [
        {title: "Example", description: "example description", category: "general"}
    ],
    categories: ["general"]
}

// function to load state
function loadState(){
    const load = localStorage.getItem("state")
    if(load){
        const loadedState = JSON.parse(load)
        state.categories = loadedState.categories
        state.todos = loadedState.todos
    }
}

// function to generate categories on the DOM
function generateCategories(){
    const main = document.querySelector("main")

    // clear out the main tag
    main.innerHTML = ""

    // create an aside for each category, with the category as an id
    for (let category of state.categories){
        const aside = document.createElement("aside")
        aside.setAttribute("id", category)
        aside.classList.add("category")
        aside.innerHTML = `<h4>${category}</h4>`
        main.append(aside)
    }
}

// function to remove todos
function removeTodo(todo){
    // const index = state.todos.findIndex((t) => t.title === todo.title && t.category === todo.category && t.description === todo.description)
    const index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
    populateTodos()
}

// function to generate todos on the DOM
function generateTodos(){

    for (let todo of state.todos){
        const cat = document.querySelector(`#${todo.category}`)
        const p = document.createElement("p")
        p.classList.add("todo")
        p.innerHTML = `<h5>${todo.title}</h5>${todo.description}`
        p.addEventListener("click", () => removeTodo(todo))
        cat.append(p)
    }

}



// generates the addTodoForm
function generateCategoryOptions(){
    const select = document.querySelector("select")
    select.innerHTML = ""

    for (category of state.categories){
        const option = document.createElement("option")
        option.innerText = category
        select.append(option)
    }
}

// The main function that sets and resets the app as information changes
function populateTodos(){
    generateCategories()
    generateTodos()
    generateCategoryOptions()
    localStorage.setItem("state", JSON.stringify(state))
}

// adding a category when you submit the category
const catForm = document.querySelector("#add-category form")
catForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = document.querySelector("#add-category input[type='text']")
    const value = input.value
    state.categories.push(value)
    input.value = ""
    populateTodos()
})

// adding a todo when you submit the todo
const todoForm = document.querySelector("#add-todo form")
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const title = document.querySelector("#add-todo input[name='todo-title']")
    const description = document.querySelector("#add-todo input[name='todo-description']")
    const category = document.querySelector("select")

    const newTodo = {
        title: title.value,
        description: description.value,
        category: category.value
    }

    state.todos.push(newTodo)
    title.value = ""
    description.value = ""
    category.value = ""
    populateTodos()
})


// initial population
loadState()
populateTodos()