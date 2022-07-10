import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../store/reducers';

const renderWithRedux = (component, initialState = {}) => {
  const store = createStore(rootReducer, initialState);
  return (
    <Provider store={ store }>
      {component}
    </Provider>
  );
};

export default renderWithRedux;
