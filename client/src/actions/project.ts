import {
    PROJECT_SET_LIST,
    PROJECT_GET_LIST,
} from '../constants';

export const setProjectsList = (projects: Array<object>) => ({ type: PROJECT_SET_LIST, projects });
export const getProjectsList = () => ({ type: PROJECT_GET_LIST });
