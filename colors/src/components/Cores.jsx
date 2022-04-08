import React from 'react'
import './Cores.css'
import colors from '../colors';

class Cores extends React.Component{

  // não é aceita em todos os lugares ainda
  //state = {filtro: 'NUNCA NUNCA NUNCA JAMAIS'}

  constructor(){
    super()
    this.state = {filtro: ''}

    //pra garantir o this
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){

    console.log(this)

    this.setState({
      filtro: event.target.value
    })
  }

  render(){
    console.log('E depois aqui')
    //onChange={(e) => this.handleChange(e)} />
    // arrow func copia o this

    //onChange={this.handleChange} />
    // ninguém copia o this
    return (
      <div>
        <div>
          <h2>Minhas cores</h2>
          <h3>Meu filtro é: {this.state.filtro}</h3>
          <input type="text" value={this.state.filtro}
                 onChange={this.handleChange} />
        </div>
        <hr/>
        <div>
          <ul>
            {colors
              .filter( (color) => this.state.filtro === '' || color.name.includes(this.state.filtro) )
              .map( (color, index) => (<li key={index}>{color.name}</li>) )}
          </ul>

        </div>
      </div>
    )
  }
}

export default Cores;
