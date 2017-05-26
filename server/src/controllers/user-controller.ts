import { UserDB } from '../db/user-db';
import { Context } from 'koa';
import { BadRequestError } from '../errors/errors';
import { User } from '../entities';

const userDB = new UserDB();

class UserController {
    async getAll(ctx: Context, next: any) {
        try {
            ctx.body = await userDB.getAll(ctx.params.userInfo.uid);
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

    async get(ctx: Context, next: any) {
        try {
            ctx.body = await userDB.get(ctx.params.id);
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }


    async post(ctx: Context, next: any) {
        let {name, email, password, role_id} = ctx.request.body;

        try {
            await userDB.insert(new User(name, email, password, role_id));
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

    async put(ctx: Context, next: any) {
        let {name, email, password, role_id} = ctx.request.body;

        if (!name || !email || !password || !role_id) {
            throw new BadRequestError();
        }

        let user = new User(name, email, password, role_id, ctx.params.id);

        try {
            await userDB.update(user);
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

    async delete(ctx: Context, next: any) {
        try {
            await userDB.delete(ctx.params.id);
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

}

export const userController = new UserController();