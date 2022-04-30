import { useRef } from "react"

function TodoList(props){

    const inputRef = useRef(null)

    return <div style={{width: "90%", margin: "auto", backgroundColor: "gray", color: "white"}}>
        <h1>My List</h1>
        <ul>
            {props.todoList.map((todo, index) => {
                return <li key={index}>{todo}</li>
            })}
        </ul>
        <input type="text" name="todo" ref={inputRef}/>
        <button onClick={() => {props.addTodo(inputRef.current.value)}}>Add Todo</button>
        </div>

}

export default TodoList