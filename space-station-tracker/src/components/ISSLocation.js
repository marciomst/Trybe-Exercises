import React, { Component } from 'react';
import Map, { Marker } from 'pigeon-maps';
import { connect } from 'react-redux';
import getCurrentISSLocation from '../services/ISSApi';
import { actUpdateCoord, getCoords } from '../store/actions';

class ISSLocation extends Component {
  componentDidMount() {
    const { getIssPosition } = this.props;
    getIssPosition();
  }

  render() {
    const { latitude, longitude } = this.props;

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
const mapStateToProps = (state) => ({
  latitude: state.latitude,
  longitude: state.longitude,
});
const mapDispatchToProps = (dispatch) => ({
  getIssPosition: () => dispatch(getCoords()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
