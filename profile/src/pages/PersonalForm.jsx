import React, { Component } from 'react';

import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { savePersonalProfile } from '../store/actions/profile';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      street: '',
      city: '',
      uf: '',
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { history, dispatch } = this.props;
    const { name, email, cpf, city, street, uf } = this.state;
    const profile = {
      name,
      email,
      cpf,
      address: {
        city,
        street,
        uf,
      },
    };
    dispatch(savePersonalProfile(profile));
    history.push('/professionalform');
  }

  render() {
    const { name, email, cpf, street, city, uf } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <fieldset>
        <Input
          label="name: "
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="street: "
          type="text"
          onChange={ this.handleChange }
          value={ street }
          name="street"
          required
        />
        <Input
          label="city: "
          type="text"
          onChange={ this.handleChange }
          name="city"
          value={ city }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ uf }
          label="uf: "
          id="uf"
          name="uf"
          options={ states }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

export default connect()(PersonalForm);
