import React, { useContext, useEffect } from 'react';
import Map, { Marker } from 'pigeon-maps';
import { ISSContext } from '../context/ISSContext';
import useInterval from '../hooks/useInterval';

function ISSLocationFunction() {
  const { latitude, longitude,
    getIssPosition, peopleInSpace,
    getPeopleInSpace,
  } = useContext(ISSContext);

  // GET PEOPLE IN SPACE
  const FIVE_SECONDS = 5000;
  useInterval(getPeopleInSpace, FIVE_SECONDS);

  // GET ISS POSITION
  const ONE_SECOND = 1000;
  useInterval(getIssPosition, ONE_SECOND);

  // LAST UPDATE
  useEffect(() => {
    document.title = new Date().toLocaleTimeString();
  });

  return (
    <main>
      <p>
        {peopleInSpace}
        {' '}
        pessoas estão no espaco
      </p>
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
export default ISSLocationFunction;
