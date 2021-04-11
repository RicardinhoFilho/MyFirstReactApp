import React, { Component } from "react";
import Conversor from "./Components/Conversor";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor De Moedas</h1>
        <div className="Linha">
          <Conversor moedaA="USD" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="USD" />
        </div>
        <div className="Linha">
          <Conversor moedaA="CAD" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="CAD" />
        </div>
        <div className="Linha">
          <Conversor moedaA="EUR" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="EUR" />
        </div>
        <div className="Linha">
          <Conversor moedaA="NOK" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="NOK" />
        </div>
      </div>
    );
  }
}

export default App;
