import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    const nomes = ['Ander', 'Gabriel', 'Airel', 'João']
    return <ul>
      {nomes.map((nome) => <li>{nome}</li>)}
    </ul>;
  }
}

export default App;
