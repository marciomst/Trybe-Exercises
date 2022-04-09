import React from 'react';
import logo from './trybe-logo.svg';
import './App.css';
import Login from './components/Login';
import Registro from './components/Registro';

function App() {
  return (
    <div>
      <header>
        <img src={ logo } alt="" srcSet="" />
      </header>
      <main className="app">
        <Login />
        <Registro />
      </main>
    </div>
  );
}

export default App;
