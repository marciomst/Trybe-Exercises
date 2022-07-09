import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import coordReducer from './reducers';

// Config
// createStore( coordReducer , applyMiddleware(thunk))
const store = createStore(coordReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
