import {
    SET_PROJECTS
} from '../constants';

export const setProjects = (projects: Array<object>) => ({ type: SET_PROJECTS, projects});
