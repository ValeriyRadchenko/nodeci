import { takeEvery, put as dispatch } from 'redux-saga/effects';
import { userService } from '../api';
import {
    setProjectsList
} from '../actions/project';
import {
    setUserToken,
} from '../actions/user';
import {
  USER_LOGIN,
  USER_LOGOUT,
} from '../constants';
import { push } from 'react-router-redux';

function * initial(): any {
    // load current user meta
}

function * userLogin(action: any): any {
  const { success, payload } = yield userService.login(action.data);

  if (success) {
    yield dispatch(setUserToken(payload.token));
    localStorage.setItem('token', payload.token);
    yield dispatch(push('/'));
  }
}

function * userLogout(action: any): any {
  localStorage.setItem('token', '');
  yield dispatch(push('/login'));
}

export default function * userSaga() {
    yield initial();

    yield * [
        takeEvery(USER_LOGIN, userLogin),
        takeEvery(USER_LOGOUT, userLogout),
    ];
}
