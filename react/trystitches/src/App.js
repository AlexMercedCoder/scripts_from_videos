import logo from "./logo.svg";
import "./App.css";
import { styled } from "@stitches/react";

const RedH1 = styled("h1", {
  color: "red",
  backgroundColor: "LightCoral",
  "&:hover": {
    color: "LightCoral",
    backgroundColor: "red",
  },
});

function App() {
  return <div className="App">
    <RedH1>
      Hello Let's see if this works
    </RedH1>
  </div>;
}

export default App;
