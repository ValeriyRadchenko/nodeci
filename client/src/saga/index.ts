import { fork } from 'redux-saga/effects';
import project from './project';
import user from './user';


export default function * rootSaga() {
  return yield * [
    fork(project),
    fork(user),
  ];
}
