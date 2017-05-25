import { Context } from 'koa';
import { BadRequestError, NotFoundError, UnauthorizedError } from './errors';

export const errorHandler = async (ctx: Context, next: any) => {

    try {
        await next();
    } catch (error) {
        if (error instanceof BadRequestError) {
            return ctx.throw(400, '<h1>400 - Bad Request</h1>');
        }

        if (error instanceof UnauthorizedError) {
            return ctx.throw(401, '<h1>401 - Unauthorized</h1>');
        }

        if (error instanceof NotFoundError) {
            return ctx.throw(404, '<h1>404 - Not Found</h1>');
        }

        ctx.throw(500, '<h1>500 - Internal server error</h1>');
    }

};