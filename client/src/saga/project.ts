import { takeEvery, put as dispatch } from 'redux-saga/effects';
import { projectsService } from '../api';
import {
    setProjectsList
} from '../actions/project';

function * initial(): any {
    const { success, payload } = yield projectsService.list();
    if (success) {
      yield dispatch(setProjectsList(payload));
    }
}

export default function * projectSaga() {
    yield initial();
}
