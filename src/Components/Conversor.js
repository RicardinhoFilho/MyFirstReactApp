import React, { Component } from "react";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    };

    this.converter = this.converter.bind(this);
    this.setState = this.setState.bind(this);
  }

  defineValor(moedaA, moedaB){
    if(moedaA == "USD" || moedaA =="usd" && moedaB == "BRL" || moedaB =="brl"){
        return 5.68;
    }else if(moedaA == "brl" || moedaA =="BRL" && moedaB == "usd" || moedaB =="USD"){
        return 0.18;
    }
  }

  converter(){

    const valor =this.defineValor(this.props.moedaA, this.props.moedaB);
    
        
   
    console.log(this.moedaA_valor);
    this.setState({moedaB_valor: parseFloat(this.state.moedaA_valor) * valor})

    console.log(this.state.moedaB_valor)


  }

  render() {
    return (
      <div className="conversor">
        <h2>
          {this.props.moedaA} para {this.props.moedaB}
        </h2>
        <input type="text" onChange={(event) => {
            this.setState({moedaA_valor: event.target.value})
        }}></input>
        <input type="button" value="Converter" onClick={this.converter}></input>
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    );
  }
}
