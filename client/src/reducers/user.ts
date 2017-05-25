import { combineReducers } from 'redux';
import { combineEvents } from '../utils/combineEvents';
import {
  USER_LOGIN,
  USER_LOGOUT,
} from '../constants';

const meta = combineEvents({
  [USER_LOGIN]: (state: any, { res }: any): any => res.user,
  [USER_LOGOUT]: (): null => null,
}, null);

export default combineReducers({
  meta,
});
