// import UncontrolledForm from "./components/UncontrollerForm";
// import ControlledForm from "./components/ControlledForm";
// import ApiCall from "./components/ApiCall";
// import "./App.css"
// import styles from "./App.module.css"
// import "./App.scss"
// import styled from "styled-components"
// import {styled} from "@stitches/react"

// const FancyHeading = styled.h1`
// background-color: red;
// border: 3px solid purple;
// `

// const FancyHeading = styled("h1", {
//   backgroundColor: "red",
//   border: "3px solid orange"
// })

import {css} from "@emotion/css"

function App() {

  const h1Class = css`
  background-color: red;
  `

  return (
  <div className="App">
    <h1 className={h1Class}>Hello World</h1>
  </div>
  )
}

export default App;
