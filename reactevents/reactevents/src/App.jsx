import React, { useState, useRef, useEffect } from "react";
import AddOne from "./AddOne";
import "./App.css";
import test from "./Events"

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const addOne = () => {
      console.log("hello")
      setCount(count + 1);
    };
    test.events.test = []
    test.on("test", addOne)
   
  }, [count]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <AddOne />
    </div>
  );
}

export default App;
