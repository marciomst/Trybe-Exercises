import React from 'react';
import { getAllCharacters } from '../services/api';

// import react from 'react';

// function MeuComponent(props){
//   console.log(props);
//   return <div>
//     <h1>Meu COmponente</h1>
//     {props.children}
//   </div>
// }

// function getPersonagemPeloNome(nome){

// }

class MeuComponent extends React.Component{

  componentWillUnmount(){
    console.log('Meu componente foi desmontado');
  }

  render(){
    return <div>
      <h1>Meu COmponente</h1>
      {this.props.children}
      <p>Idade: {this.props.age} | {this.props.minhaProp}</p>
    </div>
  }
}

export default MeuComponent;