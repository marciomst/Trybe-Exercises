import React from 'react';
// import Email from './Email';
import MeuInput from './MeuInput';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'rtertert',
      password: '',
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
    const { email, password } = this.state;
    return (
      <section>
        <h2>Login</h2>
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

        </form>
      </section>);
  }
}

export default Login;
