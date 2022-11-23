import { useState } from "react";

export default function ControlledForm(props) {
  const [todos, setTodos] = useState(["Breakfast", "Lunch"]);

  const [form, setForm] = useState({
      todo: ""
  })

  function handleSubmit(event){
      event.preventDefault()
      const newState = [...todos]
      newState.push(form.todo)
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
            <input type="submit"/>
        </form>
      {todos.map((todo, index) => (
        <h1 key={index}>{todo}</h1>
      ))}
    </div>
  );
}
