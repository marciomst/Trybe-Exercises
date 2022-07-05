import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


class Personagem extends React.Component {
  setFavorite = (event) => {
    const { personagem: { id }, personagens } = this.props;
    const novosPersonagens = personagens.map( personagem => {
      
      if(personagem.id !== Number(id))
        return personagem;

      if(event.target.checked){
        personagem.favorite = true;
      }else{
        personagem.favorite = false;
      }
      return personagem;
    });

    this.props.setPersonagens(novosPersonagens);
  }
  render() {

    return (
      <article className="Personagem">
        <img src={this.props.personagem.image} alt={this.props.personagem.name} />
        <div className="content">
          <h3>{this.props.personagem.name}</h3>
          <p>
            <Link to={`/details/${this.props.personagem.id}`}>detalhes</Link>
          </p>
          <p>
            Favorito
            <input
              type="checkbox"
              checked={this.props.personagem.favorite}
              onChange={this.setFavorite}
              />
          </p>
        </div>
      </article>
    )
  }
}

export default Personagem;