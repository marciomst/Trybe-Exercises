import React, { Component } from 'react';
import Coordinates from './Coordinates';
import { ISSContext } from '../context/ISSContext';

class Header extends Component {
  render() {
    const { latitude, longitude } = this.context;
    return (
      <header>
        <h1>
          Space Station
          {' '}
          <span className="purple-font">Tracker</span>
        </h1>
        {/*
        <ISSContext.Consumer>
          { (value) => <Coordinates latitude={ value.latitude } longitude={ value.longitude } />}
        </ISSContext.Consumer>
        */}
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </header>
    );
  }
}
Header.contextType = ISSContext;
export default Header;
