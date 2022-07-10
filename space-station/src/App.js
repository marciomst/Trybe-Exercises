/* eslint-disable react/state-in-constructor */
import React from 'react';
import './App.css';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';
import ISSProvider from './context/ISSContext';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ISSProvider>
          <Header />
          <ISSLocation />
        </ISSProvider>
      </div>

    );
  }
}

export default App;
