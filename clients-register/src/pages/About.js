import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    const { loginEmail } = this.props;
    if (!loginEmail) return <h1>Login não efetuado!</h1>;
    return (
      <main className="Home">
        <h1>Perfil</h1>
        <h2>
          Email:
          {' '}
          {loginEmail}
        </h2>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({ loginEmail: state.login.email });

export default connect(mapStateToProps)(About);
