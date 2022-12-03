import { useState, useEffect, useRef } from 'react'
import logo from './logo.svg'
import './App.css'
import rpcDispatch from './client'

function App() {

  const [todos, setTodos] = useState([])

  const input = useRef(null)


  useEffect(() => {
    rpcDispatch({type: "getTodos", payload: {}})
    .then((api_todos) => setTodos(api_todos.result))
  }, [])

  return (
    <div className="App">
      {
        todos.map((todo, index) => <h1 key={index}>{todo.message}</h1>)
      }
      <input type="text" ref={input}/>
      <button onClick={async (event) => {
        const message = input.current.value

        const updatedTodos = await rpcDispatch({type: "createTodos", payload: {message}})

        setTodos(updatedTodos.result)
      }}>Add Todo</button>
    </div>
  )
}

export default App
