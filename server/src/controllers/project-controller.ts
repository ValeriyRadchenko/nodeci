import { Context } from 'koa';
import { BadRequestError } from '../errors/errors';
import { ProjectDB } from '../db/project-db';
import { Project } from '../entities';

const projectDB = new ProjectDB();

class ProjectController {
    async getAll(ctx: Context, next: any) {
        try {
            ctx.body = await projectDB.getAll() || [];
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

    async get(ctx: Context, next: any) {
        try {
            ctx.body = await projectDB.get(ctx.params.id) || {};
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }


    async post(ctx: Context, next: any) {
        let {name, user_id} = ctx.request.body;

        try {
            await projectDB.insert(new Project(name, user_id));
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

    async put(ctx: Context, next: any) {
        let {name, user_id} = ctx.request.body;

        if (!name || !user_id) {
            throw new BadRequestError();
        }

        let project = new Project(name, user_id, ctx.params.id);

        try {
            await projectDB.update(project);
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

    async delete(ctx: Context, next: any) {
        try {
            await projectDB.delete(ctx.params.id);
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

}

export const projectController = new ProjectController();