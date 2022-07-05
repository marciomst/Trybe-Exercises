import React from "react";
import Personagem from "../../components/Personagens";

class Favorites extends React.Component{

  state = {
    loading: true,
    favorites: [],
  }

  async componentDidMount(){
    console.log(this.props.personagens)
    const favorites = this.props.personagens.filter(
      (meuPersonagem) => meuPersonagem.favorite)
    this.setState({ favorites, loading: false });
  }

  render(){

    if(this.state.loading)
      return <div>Loading...</div>;

    return (
      <main className="Details">
        <section className="characters">
          {this.state.favorites.map( (personagem) => (
            <Personagem key={personagem.id} personagem={personagem} />
          ))}
        </section>
      </main>
    )
  }
}
export default Favorites;
