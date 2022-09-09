import react, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/header";
import "./App.css";
import axios from "axios";
import Body from "./components/Body";
//

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
