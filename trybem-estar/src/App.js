/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import './App.css';
import logo from './assets/trybemestar.png';
import Timer from './components/Timer';

// adicionar botão para esconder e mostrar timer ✅
class App extends React.Component {
  constructor() {
    super();
    console.log('constructor > componentDidMount > render');
    console.log('constructor');
    this.state = {
      timer: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  changeTimer() {
    // pegar o timer que existe e inverter o valor
    this.setState((prevState) => {
      // eslint-disable-next-line react/no-access-state-in-setstate
      console.log('trocando o timer');
      return {
        timer: !prevState.timer };
    });
  }

  renderTimer() {
    const { timer } = this.state;
    if (timer) {
      return (<p>DESLIGAR TIMER</p>);
    }
    return (<p>LIGAR TIMER</p>);
  }

  render() {
    console.log('render');

    const { timer } = this.state;

    return (
      <div>
        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        { timer && <Timer on={ timer } />}
        <button
          type="button"
          onClick={ () => this.changeTimer() }
        >
          { this.renderTimer() }
        </button>
      </div>
    );
  }
}

export default App;
