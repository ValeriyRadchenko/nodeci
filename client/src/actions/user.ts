import {
    USER_LOGIN
} from '../constants';

export const login = (data: any) => ({ type: USER_LOGIN, data });
