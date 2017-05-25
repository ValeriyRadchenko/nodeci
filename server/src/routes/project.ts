import * as Router from 'koa-router';
import { ProjectDB } from '../db/project-db';
import { Project } from '../project/project';
import { Context } from 'koa';
import { BadRequestError } from '../errors/errors';

export const projectRouter = new Router();
const projectDB = new ProjectDB();

projectRouter

    .get('/project', async (ctx: Context, next: any) => {
        try {
            ctx.body = await projectDB.getAll();
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    })

    .get('/project/:id', async (ctx: Context, next: any) => {
        try {
            ctx.body = await projectDB.get(ctx.params.id);
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    })

    .post('/project', async (ctx: Context, next: any) => {
        let {name, user_id} = ctx.request.body;

        try {
            await projectDB.insert(new Project(name, user_id));
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }

    })

    .put('/project/:id', async (ctx: Context, next: any) => {

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
    })

    .delete('/project/:id', async (ctx: Context, next: any) => {
        try {
            await projectDB.delete(ctx.params.id);
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    });