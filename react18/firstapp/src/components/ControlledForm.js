import { useState } from "react";

export default function ControlledForm(props) {
  const [todos, setTodos] = useState([
      {todo: "Breakfast", other: {
          cheese: "Gouda"
      }},
      {todo: "Lunch", other: {
        cheese: "Swiss"
    }},
  ]);

  const [form, setForm] = useState({
      todo: "",
      cheese: ""
  })

  function handleSubmit(event){
      event.preventDefault()
      const newState = [...todos]
      newState.push({
          todo: form.todo,
          other: {
              cheese: form.cheese
          }
      })
      setTodos(newState)
  }

  function handleChange(event){
      const newState = {...form}
      newState[event.target.name] = event.target.value
      setForm(newState)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" value={form.todo} onChange={handleChange}/>
            <input type="text" name="cheese" value={form.cheese} onChange={handleChange}/>
            <input type="submit"/>
        </form>
      {todos.map((todo, index) => (
        <h1 key={index}>{todo.todo + " " + todo.other.cheese}</h1>
      ))}
    </div>
  );
}
