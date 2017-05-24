import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import user from './user'
import project from './project'

const reducers = {
    routing,
    project,
    user,
}

export default combineReducers(reducers);
