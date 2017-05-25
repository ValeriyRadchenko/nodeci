import { takeEvery, put as dispatch } from 'redux-saga/effects';
import { projectsService } from '../api';
import {
    setProjectsList
} from '../actions/project';

function * initial(): any {
    const projects = yield projectsService.list();
    yield dispatch(setProjectsList(projects));
}

export default function * projectSaga() {
    yield initial();
}
