import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Personagem from "../../components/Personagens";
import "./styles.css";

class Home extends React.Component{

  state = {
    redirect: false,
    redirectViaCodigo: false,
    personagens: [],
    loading: false,
  }

  componentDidMount(){
    const { setPersonagens, personagens } = this.props;

    if(personagens.length > 0)
      return;

    this.setState({ loading: true }, async() => {
      const result = await fetch(`https://rickandmortyapi.com/api/character/`);
      const personagens = await result.json();
      this.setState({ loading: false });
      //personagens: personagens.results, 
      setPersonagens(personagens.results);
    });
  }

  navegar = () => {
    console.log('antes do setState')
    this.setState({
      redirectViaCodigo: true
    }, () => {
      console.log('mudou com certeza')
      this.props.history.push('/contact');
    })
  }

  render(props){
    console.log(props);

    // como se history = [ 'meusite.com' ]
    // navegar para contact
    // como se history = [ 'meusite.com', 'meusite.com/contact' ]
    // push

    // constructor > render > componentDidMount >
    // espero o click
    // setState > render

    if(this.state.redirect){
      return <Redirect to="/contact" />
    }

    // if(this.state.loading)
    //   return <div>Loading...</div>;

    return <main className="Home">
      <h1>Home</h1>

      <section className="characters">
        {this.props.personagens.map( (personagem) => (
          <Personagem
            key={personagem.id}
            personagem={personagem}
            personagens={this.props.personagens}
            setPersonagens={this.props.setPersonagens} />
        ))}
      </section>

      <div>
        <button onClick={() => this.props.history.push('/contact')}>Ir para Contato</button>
      </div>
      <div>
        <button onClick={ this.navegar }>Ir para Contato por redirect</button>
      </div>
      <div>
        <button onClick={() => this.setState({ redirect: true })}>Ir para Contato por redirect</button>
      </div>
      <div>
        <Link to="/contact">Link para Contato</Link>
      </div>
    </main>
  }
}
export default Home;
