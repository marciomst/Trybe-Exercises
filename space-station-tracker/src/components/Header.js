import React, { Component } from 'react';
import { connect } from 'react-redux';
import Coordinates from './Coordinates';

class Header extends Component {
  render() {
    const { latitude, longitude } = this.props;
    return (
      <header>
        <h1>
          Space Station
          {' '}
          <span className="purple-font">Tracker</span>
        </h1>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  longitude: state.longitude,
  latitude: state.latitude,
});

export default connect(mapStateToProps)(Header);
