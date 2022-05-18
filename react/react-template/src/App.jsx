import {Routes, Route} from "react-router-dom"
import Main from "./pages/Main"

function App() {


  return (
    <div className="App">
      <h1>Title of the Page</h1>

      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>

      <footer>

      </footer>
    </div>
  )
}

export default App
