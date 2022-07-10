/* eslint-disable react/state-in-constructor */
import React, { createContext } from 'react';
import getCurrentISSLocation from '../services/ISSApi';

export const ISSContext = createContext({ latitude: 0, longitude: 0 });

class ISSProvider extends React.Component {
    state = {
      latitude: -20,
      longitude: -10,
    }

    componentDidMount() {
      const ONE_SECOND = 1000;
      setInterval(this.getCoords, ONE_SECOND);
    }

    getCoords = async () => {
      getCurrentISSLocation().then(
        (resp) => {
          const issPosition = {
            latitude: Number(resp.iss_position.latitude),
            longitude: Number(resp.iss_position.longitude),
          };
          this.setState({ ...issPosition });
        },
      );
    }

    render() {
      const contextValue = {
        ...this.state,
        getIssPosition: this.getCoords,
      };

      return (
        <ISSContext.Provider value={ contextValue }>
          {this.props.children}
        </ISSContext.Provider>

      );
    }
}
export default ISSProvider;
