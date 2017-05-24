import * as Router from 'koa-router';
import { ProjectDB } from '../db/project-db';
import { Project } from '../project/project';

export const projectRouter = new Router();

projectRouter

    .get('/project', async (ctx: any, next: any) => {
        let projectDB = new ProjectDB();
        ctx.body = await projectDB.getAll();
        await next();
    })

    .post('/project', async (ctx: any, next: any) => {
        let projectDB = new ProjectDB();
        let {name, user_id} = ctx.request.body;

        try {
            await projectDB.add(new Project(name, user_id));
            ctx.body = 'ok';
        } catch (error) {
            ctx.status = 500;
            ctx.body = error;
        } finally {
            await next();
        }

    });