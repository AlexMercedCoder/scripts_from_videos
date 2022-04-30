import TodoList from "./components/TodoList";
import {useState} from "react"

function App() {

  const [todoList, setTodoList] = useState(["Eat Breakfast"])
  const [todoList2, setTodoList2] = useState([])

  const addTodo = (newTodo) => {
    // copy existing state
    const newState = [...todoList]
    // push new todo into copy
    newState.push(newTodo)
    // update the state
    setTodoList(newState)
  }

  const addTodo2 = (newTodo) => {
    // copy existing state
    const newState = [...todoList]
    // push new todo into copy
    newState.push(newTodo)
    // update the state
    setTodoList2(newState)
  }

  return (
    <div>Hello World
      <h1>Todo List 1</h1>
      <TodoList todoList={todoList} addTodo={addTodo}/>
      <h1>TodoList 2</h1>
      <TodoList todoList={todoList2} addTodo={addTodo2}/>
    </div>
  );
}

export default App;
