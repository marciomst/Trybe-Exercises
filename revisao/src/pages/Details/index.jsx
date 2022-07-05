import React from "react";
import Personagem from "../../components/Personagens";
import "./styles.css";

class Details extends React.Component{

  state = {
    loading: true,
    personagem: null,
  }

  async componentDidMount(){
    const { match: { params: { id } } } = this.props;
    // const id = this.props.match.params.id;
    if(!id)
      return;    
    
    // this.setState({ loading: true }, async() => {
    //   const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    //   const personagem = await result.json();
    //   this.setState({ personagem: personagem, loading: false });
    // });

    const personagem = this.props.personagens.find(
      (meuPersonagem) => meuPersonagem.id === Number(id) )
    this.setState({ personagem, loading: false });
  }

  render(){

    if(this.state.loading)
      return <div>Loading...</div>;

    return (
      <main className="Details">
        <Personagem
          personagem={this.state.personagem}
          setFavorite={this.props.setFavorite}
          personagens={this.props.personagens} />
      </main>
    )
  }
}
export default Details;
