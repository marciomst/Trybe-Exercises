import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebar: true,
    };
  }

  toogleSideBar = () => {
    this.setState((prevState) => ({
      sidebar: !prevState.sidebar,
    }));
  }

  render() {
    const { sidebar } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Header toogleSideBar={ this.toogleSideBar } />
          <div className="main-content">
            {sidebar && <Sidebar />}
            <Content />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
