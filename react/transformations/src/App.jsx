import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AllCaps from './transformers/AllCaps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AllCaps>fgsfgsfgsfgsfg</AllCaps>
    </div>
  )
}

export default App
