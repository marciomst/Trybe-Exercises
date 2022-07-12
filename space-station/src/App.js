/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ISSLocationFunction from './components/ISSLocationFunction';
import ISSProvider from './context/ISSContext';

function App() {
  const [isMapVisible, setIsMapVisible] = useState(true);

  const toggleMap = () => {
    setIsMapVisible((oldState) => !oldState);
  };

  return (
    <div className="App">
      <ISSProvider>
        <Header />
        <button onClick={ () => setIsMapVisible((oldState) => !oldState) } type="button">
          {
            isMapVisible ? 'Esconder mapa' : 'Mostrar mapa'
          }
        </button>
        { isMapVisible && <ISSLocationFunction /> }
      </ISSProvider>
    </div>

  );
}

export default App;
