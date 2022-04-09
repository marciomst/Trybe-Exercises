import React from 'react';

class Email extends React.Component {
  render() {
    const { email, onInputChange } = this.props;
    return (
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ onInputChange }
        />
      </label>);
  }
}

export default Email;
