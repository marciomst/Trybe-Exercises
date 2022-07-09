import { UPDATE_COORDS } from '../actions/actionTypes';

const initialState = {
  latitude: 0,
  longitude: 0,
};

const coordReducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_COORDS:
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
};

export default coordReducer;
