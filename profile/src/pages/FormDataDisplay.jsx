import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { personal, professional } = this.props;
    const { name, cpf, email, address: { city, street, uf } } = personal;
    const { curriculum, description, position } = professional;
    // Recupere as informações do seu estado criado no Redux
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {name}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { street }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { position }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  professional: state.profileReducer.professional,
  personal: state.profileReducer.personal,
});

export default connect(mapStateToProps)(FormDataDisplay);
