import { UserDB } from '../db/user-db';
import { Context } from 'koa';
import { BadRequestError } from '../errors/errors';

const userDB = new UserDB();

class UserController {
    async getAll(ctx: Context, next: any) {
        try {
            ctx.body = await userDB.getAll();
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }
}

export const userController = new UserController();