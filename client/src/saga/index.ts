import { fork } from 'redux-saga/effects';
import project from './project';


export default function * rootSaga() {
  return yield * [
    fork(project),
  ];
}
