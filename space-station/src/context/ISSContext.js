/* eslint-disable react/state-in-constructor */
import React, { createContext } from 'react';
import getCurrentISSLocation from '../services/ISSApi';

export const ISSContext = createContext({ latitude: 0, longitude: 0 });

class ISSProvider extends React.Component {
    state = {
      latitude: -20,
      longitude: -10,
      peopleInSpace: 0,
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

    getPeopleInSpace = async () => {
      const endpoint = 'http://api.open-notify.org/astros.json';
      const result = await fetch(endpoint).then((resp) => resp.json());
      this.setState({ peopleInSpace: result.number });
    }

    render() {
      const contextValue = {
        ...this.state,
        getIssPosition: this.getCoords,
        getPeopleInSpace: this.getPeopleInSpace,
      };
      const { children } = this.props;
      return (
        <ISSContext.Provider value={ contextValue }>
          {children}
        </ISSContext.Provider>

      );
    }
}
export default ISSProvider;
