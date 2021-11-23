import React, { Component } from "react";
import api from "./api/api";

class App extends Component{
  state= {
    paises:[],
  }
async componentDidMount(){
  const response = await api.get('');
   // console.log(response.data);
  this.setState({paises: response.data});

}
  render(){
    const {paises}= this.state;
    return (
      <div>
     <h1>Listar paises da API REST</h1> 
     {console.log(paises)}   
     {paises.map(pais =>(
       <li key={pais.name.id}>
       <h2><strong>1-Nome do pais:</strong></h2>
       {pais.name.common} 
       <h2><strong>2-Capital do pais:</strong></h2>
       Cidade capital: {pais.capital}
       <h2><strong>3-Nome oficial:</strong></h2>
       {pais.name.official}
       <h2><strong>4-Regiao:</strong></h2>
      {pais.region}
      <h2><strong>5-Sub-Regiao:</strong></h2>
      {pais.subregion}
      <h2><strong>6-Populacao:</strong></h2>
      O numero da populacao : {pais.population}
      <h2><strong>7-Fuso Horario:</strong></h2>
      {pais.timezones}
      <h2><strong>8-Baixe a bandeira do pais:</strong></h2>
      {pais.flags.png}
      </li>
     ))}
      </div>
    )
  }
}

export default App;
