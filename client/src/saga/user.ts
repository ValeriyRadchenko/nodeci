import { takeEvery, put as dispatch } from 'redux-saga/effects';
import { userService } from '../api';
import {
    setProjectsList
} from '../actions/project';
import {
    setUserToken
} from '../actions/user';
import {
  USER_LOGIN
} from '../constants';

function * initial(): any {
    // load current user meta
}

function * userLogin(action: any): any {
  const { success, payload } = yield userService.login(action.data);

  if (success) {
    yield dispatch(setUserToken(payload.token));
    localStorage.setItem('token', payload.token);
  }
}

export default function * userSaga() {
    yield initial();

    yield * [
        takeEvery(USER_LOGIN, userLogin),
    ];
}
