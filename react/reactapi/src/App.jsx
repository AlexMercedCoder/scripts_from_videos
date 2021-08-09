import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import {useFetch} from "merced-react-hooks"
import {Fetch} from "react-request"

function App() {

  return (
    <div className="App">
      <Fetch url="https://dummydata.netlify.app/mariones.json">
        {({fetching, failed, data}) => {

          if (fetching){
            return <h1>Loading</h1>
          }
          if (failed){
            return <h1>Request Failed</h1>
          }
          if (data){
            return data.nes_games.map((game) => <img src={game.img}/>)
          }

        }}
      </Fetch>
    </div>
  );
}

export default App;
