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
      other: {
          cheese: ""
      }
  })

  function handleSubmit(event){
      event.preventDefault()
      const newState = [...todos]
      newState.push(form)
      setTodos(newState)
  }

  function handleChange(event){
      const newState = {...form}
      newState[event.target.name] = event.target.value
      setForm(newState)
  }

  function handleChange2(event){
    const newState = {...form}
    newState.other[event.target.name] = event.target.value
    setForm(newState)
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" value={form.todo} onChange={handleChange}/>
            <input type="text" name="cheese" value={form.cheese} onChange={handleChange2}/>
            <input type="submit"/>
        </form>
      {todos.map((todo, index) => (
        <h1 key={index}>{todo.todo + " " + todo.other.cheese}</h1>
      ))}
    </div>
  );
}
