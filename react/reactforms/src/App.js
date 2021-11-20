import { useRef, useState } from "react";

function App() {
  const formRef = useRef(null);

  const [formState, setFormState] = useState({
    input: ""
  })

  const [valid, setValid] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    console.log("from ref:", formRef.current[0].value);
    console.log("from state:", formState)
  }

  function handleChange(event){
    // check validity
    setValid(event.target.checkValidity())
    // make a copy
    const newState = {...formState}
    // update the property
    newState[event.target.name] = event.target.value
    // update state
    setFormState(newState)
  }

  function handleChange2(event){
    setFormState({...formState, [event.target.name]: event.target.value})
  }

  return (
    <div className="App">
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="input" value={formState.input} onChange={handleChange} pattern="cat"/>
        <input type="submit" value="The Submit Button" disabled={!valid}></input>
      </form>
    </div>
  );
}

export default App;
