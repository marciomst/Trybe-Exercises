/* eslint-disable no-magic-numbers */
import React from 'react';
// import sound from '../assets/bip.mp3';

// const ONE_SECOND = 1000;
// const TIME_LIMIT = 6;

export default class Timer extends React.Component {
  constructor() {
    super();
    console.log('[timer]constructor > componentDidMount > render');
    console.log('[timer]constructor');
    this.state = {
      count: 0,
      momentoExercicio: 0,
    };
  }

  componentDidMount() {
    console.log('[timer]componentDidMount');

    // setInterval -> setState
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('[timer]componentWillUnmount');
    // desligar
    clearInterval(this.interval);
  }

  renderMomentoExercicio() {
    const { count, momentoExercicio } = this.state;
    const tiposDeMomentos = ['Inspire', 'Segure', 'Expire'];
    if (count < 6) {
      return (<h1>{tiposDeMomentos[momentoExercicio]}</h1>);
    }
    this.setState({
      count: 0,
      // ultimo elemento do array
      momentoExercicio: tiposDeMomentos.length - 1 === momentoExercicio
        ? 0 : momentoExercicio + 1,
    });
  }

  render() {
    const { count } = this.state;
    console.log('[timer]render');

    return (
      <section>
        {this.renderMomentoExercicio()}
        <h1>{count}</h1>
      </section>
    );
  }
}
