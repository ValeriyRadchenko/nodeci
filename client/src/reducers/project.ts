import { combineReducers } from 'redux';
import { combineEvents } from '../utils/combineEvents';
import {
  SET_PROJECTS,
} from '../constants';

const list = combineEvents({
  [SET_PROJECTS]: (state: any, action: any): Array<object> => action.projects,
}, []);

export default combineReducers({
  list,
});
