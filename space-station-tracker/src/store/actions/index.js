import getCurrentISSLocation from '../../services/ISSApi';
import { UPDATE_COORDS } from './actionTypes';

const actUpdateCoord = (payload) => ({ type: UPDATE_COORDS, payload });

const getCoords = () => (dispatch) => {
  getCurrentISSLocation().then(
    (resp) => { dispatch(actUpdateCoord(resp.iss_position)); },
  );
};

export { actUpdateCoord, getCoords };
