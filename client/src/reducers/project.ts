import { combineReducers } from 'redux';
import { combineEvents } from '../utils/combineEvents';
import {
  PROJECT_SET_LIST,
} from '../constants';

const list = combineEvents({
  [PROJECT_SET_LIST]: (state: any, action: any): Array<object> => action.projects,
}, []);

export default combineReducers({
  list,
});
