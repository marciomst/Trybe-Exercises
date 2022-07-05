import React from 'react';
import './App.css';
import MeuComponent from './components/MeuComponent';

function Filho(props){
  return <p>{props.nome}</p>
}

// props, state

// state + ciclo de vida
  // render

// state = memória do nosso componente; conjunto de variáveis que interessam ao nosso componente
// leitura; escrita; disponibilização

// JEITO REACT
// leitura: this.state.nome
// escrita: this.setState({ nome: 'João' })
// disponibilização = somente dentro do componente atual

// redux -> global state

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      nome: '',
      quantidadeVezesMudou: 0,
      loading: false,
      meusDados: [],
      nome_personagem: '',
    }
    console.log('E no inicio veio a haver o component')
    // buscar no localstorage
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    // certeza que o component existe
    console.log('Component did mount... já renderizou pela primeira vez!')
    // requisição
    // buscar no localstorage

    this.intervalo = setInterval(() => {
      // copia o this
      // setState => this estará desatualizado
    }, 1000);

  }

  handleChange(event){
    // console.log(this)
    this.setState({
      nome: event.target.value,
      quantidadeVezesMudou: this.state.quantidadeVezesMudou + 1
     });
    
    // garante que o this estará atualizado
    // this.setState((prevState) => ({
    //   nome: event.target.value,
    //   quantidadeVezesMudou: prevState.quantidadeVezesMudou + 1
    // }));

    // this.setState({ loading: true });
    // this.setState({ meuDados: [1, 2, 3] }); //como vc garante que a linha 63 vai acontecer depois da linha 62?
    // this.setState({ loading: false });

    // setState é sincrono?

    const { loading, nome_personagem: nomePersonagem } = this.state;
    console.log('antes:', this.state, loading, nomePersonagem)

     // js -> camelCase minMminMmin -> class ou componente Pascal Case
     // python -> snake_case
     // go golang => export Pascalcase camelCase

    this.setState({ loading: true }, () => {
      //pegar atualizado
      const { loading: loadingAtualizado } = this.state;
      console.log('loadingAtualizado', loadingAtualizado);
      console.log('aqui eu sei que rolou o loading pra true. olha ele aqui:', this.state)
      this.setState({ meuDados: [1, 2, 3] }, () => {
        const { loading: loadingAtualizadoDenovo } = this.state;
        console.log('loadingAtualizadoDenovo', loadingAtualizadoDenovo);
        console.log('aqui eu sei que rolou o loading pra true. olha ele aqui:', this.state)
        this.setState({ loading: false } )
      });
    })
  }

  // handleChange2 = (event) => {
  //   console.log(this)
  //   this.setState({ nome: event.target.value })
  // }

  render() {

    console.log('ta na hora tá na hora... tá hora de renderizar')

    const { nome } = this.state;
    // this.setState({ nome: 'infinito' })
    return (
      <div className="App">
        <input value={nome} name="nome"
          // onChange={ this.handleChange2 } />
          // onChange={ (event) => this.handleChange2(event) } />
          onChange={ this.handleChange } />
        { nome !== '' && <MeuComponent meuNome="Eneais" minhaProp={10} age={10}>
          Não acredito!
          <Filho nome="Joarez" />
        </MeuComponent>}
        
      </div>
    );
  }
}

export default App;
