import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      redirectViaCodigo: false,
      personagens: this.getPersonagensFromLocalStorage(),
      loading: false,
    }
  }

  getPersonagensFromLocalStorage = () => {
    const personagens = localStorage.getItem('personagens');
    return personagens ? JSON.parse(personagens) : [];
  }

  setPersonagensInLocalStorage = () => {
    const { personagens } = this.state;
    localStorage.setItem('personagens', JSON.stringify(personagens));
  }

  setPersonagens = (personagens) => {
    this.setState({ personagens }, () => {
      this.setPersonagensInLocalStorage();
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/favorites">Favoritos</Link>&nbsp;
        </nav>
        <hr/>
        <Switch>
        <Route path="/favorites" render={(props) => 
            (<Favorites {...props}
              setPersonagens={this.setPersonagens}
              personagens={this.state.personagens}
              />)} />
          
          {/* <Route path="/">
            <Home />
          </Route> */}
          {/* <Route path="/" render={(props) => <Home {...props} />} /> */}

          <Route path="/details/:id" render={(props) => 
            (<Details {...props}
              setPersonagens={this.setPersonagens}
              personagens={this.state.personagens}
              />)} />

          <Route path="/" render={(props) => 
            (<Home {...props}
              setPersonagens={this.setPersonagens}
              personagens={this.state.personagens}
              />)} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
