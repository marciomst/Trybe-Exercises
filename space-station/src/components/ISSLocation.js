import React, { Component } from 'react';
import Map, { Marker } from 'pigeon-maps';
import { ISSContext } from '../context/ISSContext';

class ISSLocation extends Component {
  componentDidMount() {
    const ONE_SECOND = 1000;
    const { getIssPosition } = this.context;
    this.intervalId = setInterval(getIssPosition, ONE_SECOND);
    document.title = new Date().toLocaleTimeString();
  }

  componentDidUpdate() {
    document.title = new Date().toLocaleTimeString();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { latitude, longitude } = this.context;

    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 50 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
        </div>
        {' '}
      </main>
    );
  }
}
ISSLocation.contextType = ISSContext;
export default ISSLocation;
