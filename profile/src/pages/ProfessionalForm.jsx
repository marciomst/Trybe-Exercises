import React, { Component } from 'react';

import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { saveProfessionalProfile } from '../store/actions/profile';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      position: '',
      description: '',
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
    const profile = {
      ...this.state,
    };
    dispatch(saveProfessionalProfile(profile));
    history.push('/formdisplay');
  }

  render() {
    const { curriculum, position, description } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="position:"
          name="position"
          type="text"
          value={ position }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do position: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          label="enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

export default connect()(ProfessionalForm);
