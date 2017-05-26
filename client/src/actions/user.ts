import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_SET_TOKEN,
} from '../constants';

export const login = (data: any) => ({ type: USER_LOGIN, data });
export const logout = () => ({ type: USER_LOGOUT });
export const setUserToken = (token: string) => ({ type: USER_SET_TOKEN, token });
