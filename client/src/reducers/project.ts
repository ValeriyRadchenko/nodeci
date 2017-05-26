import { combineReducers } from 'redux';
import { combineEvents } from '../utils/combineEvents';
import {
  PROJECT_SET_LIST,
  USER_LOGOUT,
} from '../constants';

const list = combineEvents({
  [PROJECT_SET_LIST]: (state: any, action: any): Array<object> => action.projects,
  [USER_LOGOUT]: (): Array<object> => [],
}, []);

export default combineReducers({
  list,
});
