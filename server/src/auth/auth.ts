import { v4 } from 'uuid';
import * as jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../errors/errors';

class Auth {

    private secret: string;
    private userInfo: any;

    constructor() {
        this.secret = v4();
    }

    sign(payload: any): Promise<string> {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, this.secret, {algorithm: 'HS256'}, (error: Error, token: string) => {
                if (error) {
                    switch (error.name) {
                        case 'TokenExpiredError':
                            throw new Error('Token has expired');
                        default:
                            reject(error);
                    }
                }

                resolve(token);
            });
        });
    }

    verify(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.secret, {algorithms: ['HS256']}, (error: Error, decoded: any) => {
                if (error) {
                    reject(new UnauthorizedError());
                }

                this.userInfo = decoded;
                resolve(decoded);
            });
        });
    }

    getUserInfo() {
        return this.userInfo;
    }
}


export const auth = new Auth();