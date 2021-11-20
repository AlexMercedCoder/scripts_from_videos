import {Route, Routes, Link} from "react-router-dom"
import Component from "./components/Component";


function App() {
  return (
    <div className="App">
      <h1>The Header</h1>
      <Routes>
        <Route path="/*" element={<Component text="cheese"/>}/>
        <Route path="/bread/*" element={<Component text="bread"/>}/>
        <Route path="/gouda" element={<Component text="gouda"/>}/>
        <Route path="/cheese/:cheese" element={<Component text="gouda"/>}/>
      </Routes>
      <h1>The Footer</h1>
    </div>
  );
}

export default App;
