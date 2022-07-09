import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Header />
        <ISSLocation />
      </div>
    </Provider>
  );
}

export default App;
