import React, { Component } from "react";
import Conversor from "./Components/Conversor";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
     <div className="App">
       <Conversor moedaA="USD" moedaB="BRL"/>
     </div>
    );
  }
}

export default App;
