import { Outlet } from "react-router-dom";
import "./App.css";
import { Heading } from "./styles";

function App() {
  return (
    <>
      <Heading>The Cheese App</Heading>
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default App;
