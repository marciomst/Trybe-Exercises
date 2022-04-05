import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// importação 
import App from './App';

// importação -> comonjs
// const App = require('./App')

// versão 17, versão 18
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// // versão 18
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

