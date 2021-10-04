import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  return (
    <div className="App">
      <Header cheese="gouda"/>
      <Header cheese="munster"/>
      <Counter/>
    </div>
  );
}

function Header (props) {
  return <h1 className="cheese">Hello World - {props.cheese}</h1>
}

function Counter () {
  let [counter, setCounter] = useState(0)

  const addOne = () => {setCounter((current) => {return current + 1});}

  return <h1 onClick={addOne}>{counter}</h1>
}

console.log(Header)

export default App;
