import { takeEvery, put as dispatch } from 'redux-saga/effects';
import { projectsService } from '../api';
import {
    setProjectsList
} from '../actions/project';
import {
  PROJECT_GET_LIST,
} from '../constants';

function * getProjectsList(): any {
    const { success, payload } = yield projectsService.list();

    if (success) {
      yield dispatch(setProjectsList(payload));
    }
}

export default function * projectSaga() {
    yield * [
        takeEvery(PROJECT_GET_LIST, getProjectsList),
    ];
}
