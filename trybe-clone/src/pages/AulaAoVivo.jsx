/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';

class AulaAoVivo extends React.Component {
  constructor() {
    super();
    this.state = {
      aulas: [
        { name: 'Ciclo de vida React' },
        { name: 'Apps com Router' },
        { name: 'Aula da suzy' },
      ],
    };
  }

  render() {
    console.log(this.props);
    const { match } = this.props;
    const { aulas } = this.state;
    // history.push('/projetos');
    console.log(aulas[match.params.id]);
    return (
      <h2>
        Aula ao vivo:
        <hr />
        { aulas[match.params.id].name }
        <Link to={ `/aula-ao-vivo/${match.params.id - 1}` }>
          Aula Anterior
        </Link>
      </h2>
    );
  }
}

// const meuObj = { fullname: 'Gabriel' }

// meuObj.fullname
// const minhaVar = 'fullname';
// meuObj[minhaVar]

// setState({
//   [name]: value
// })

// https://www.linkedin.com/in/gabriel-espindola-2252a119/
// https://www.linkedin.com/in/rafael-moraes-2144a1228/
export default AulaAoVivo;
