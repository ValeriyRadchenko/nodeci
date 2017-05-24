import { takeEvery, put as dispatch } from 'redux-saga/effects';
import { projectsService } from '../api';
import {
    setProjects
} from '../actions/projects'

function * initial(): any {
    const projects = yield projectsService.list();
    yield dispatch(setProjects(projects));
}

export default function * orderSaga() {
    yield initial();

    // yield * [
    //     takeEvery(ORDER_START, startOrder),
    // ]
}
