import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import {useState} from "react"

function Example(props){
 return <h1>Cheese</h1>
}

function App() {



  const [counter, setCounter] = useState({
    value: 1
  })

  console.log("component rendered:", counter)

  const addOne = () => {
    const newState = {...counter}
    newState.value += 2
    setCounter(newState)
    console.log("addOne:", counter)
  }

  return (
  <div className="App">
    {counter.value}<br/>
    <button onClick={addOne}>Add One</button>
  </div>
  )
}

export default App;
