import React from 'react';
import MeuInput from './MeuInput';

class Registro extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
    };
    // this.changeInput = this.changeInput.bind(this);
  }

  changeInput = (event) => {
    const key = event.target.name;
    const { value } = event.target;
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { email, password, name } = this.state;

    return (
      <section>
        <h2>Registro</h2>
        <form>
          <MeuInput
            name="email"
            type="email"
            value={ email }
            onInputChange={ this.changeInput }
          />
          <MeuInput
            name="password"
            type="password"
            value={ password }
            onInputChange={ this.changeInput }
          />
          <MeuInput
            name="name"
            type="text"
            value={ name }
            onInputChange={ this.changeInput }
          />

        </form>
      </section>);
  }
}

export default Registro;
