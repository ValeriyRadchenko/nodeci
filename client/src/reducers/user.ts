import { combineReducers } from 'redux';
import { combineEvents } from '../utils/combineEvents';
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SET_TOKEN,
} from '../constants';

const token = combineEvents({
  [USER_SET_TOKEN]: (state: any, action: any): string => action.token,
  [USER_LOGOUT]: (): string => '',
}, '');

export default combineReducers({
  token,
});
