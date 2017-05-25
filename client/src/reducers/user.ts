import { combineReducers } from 'redux';
import { combineEvents } from '../utils/combineEvents';
import {
  USER_LOGIN,
  USER_LOGOUT,
} from '../constants';

const meta = combineEvents({

}, null);

export default combineReducers({
  meta,
});
