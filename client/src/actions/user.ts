import {
    USER_LOGIN,
    USER_SET_TOKEN,
} from '../constants';

export const login = (data: any) => ({ type: USER_LOGIN, data });
export const setUserToken = (token: string) => ({ type: USER_SET_TOKEN, token });
