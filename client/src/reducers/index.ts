import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import project from './project';

const reducers = {
    routing,
    project,
    user,
    form: formReducer,
};

export default combineReducers(reducers);
