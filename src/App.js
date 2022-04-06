import logo from './logo.svg';
import './App.css';
import Cabeca from './componentes/Cabeca';
import Tronco from './componentes/Tronco';
import Input from './componentes/Input';

function App() {
  return (
    <div className="App">
      <h1>Desenhando uma pessoa</h1>
      <Cabeca olhos={['Direito', 'Esquerdo']} />
      <Cabeca  />
      <Tronco />

      <Cabeca ol />

      <hr/>
      <Input type="text" />
    </div>
  );
}

export default App;
