import { takeEvery, put as dispatch } from 'redux-saga/effects';
import { userService } from '../api';
import {
    setProjectsList
} from '../actions/project';

import {
  USER_LOGIN
} from '../constants';

function * initial(): any {
    // load current user meta
}

function * userLogin(action: any): any {
  const response = yield userService.login(action.data);
  console.log(response);
}

export default function * userSaga() {
    yield initial();

    yield * [
        takeEvery(USER_LOGIN, userLogin),
    ];
}
