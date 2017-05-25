import { Context } from 'koa';
import { BadRequestError, UnauthorizedError } from '../errors/errors';
import { UserDB } from '../db/user-db';
import md5 = require('md5');
import { User } from '../entities/user';
import { auth } from '../auth/auth';

const userDB = new UserDB();

class LoginController {

    async login(ctx: Context, next: any) {
        let {name, password} = ctx.request.body;
        let user: User = null;

        try {
            user = await userDB.getByName(name);
        } catch (error) {
            throw new BadRequestError(error.message);
        }

        if (!user || user.password !== md5(password)) {
            throw new UnauthorizedError();
        }

        let token = await auth.sign({
            uid: user.id,
            role: user.roleId,
            exp: Math.floor( ( Date.now() / 1000 ) + (24 * 60 * 60) )
        });

        token = `Bearer ${token}`;

        ctx.body = {
            token
        };

        await next();
    }

}

export const loginController = new LoginController();

export async function jwt(ctx: Context, next: any) {
    let token = ctx.headers.authorization.split('Bearer ')[1];
    try {
        await auth.verify(token);
        await next();
    } catch (error) {
        throw new UnauthorizedError(error.message);
    }
}

