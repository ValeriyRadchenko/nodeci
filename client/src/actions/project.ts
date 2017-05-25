import {
    PROJECT_SET_LIST
} from '../constants';

export const setProjectsList = (projects: Array<object>) => ({ type: PROJECT_SET_LIST, projects });
