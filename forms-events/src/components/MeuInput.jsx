import React from 'react';

class MeuInput extends React.Component {
  render() {
    const { value, type, name, onInputChange } = this.props;
    return (
      <label htmlFor="email">
        Email
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onInputChange }
        />
      </label>);
  }
}

export default MeuInput;
