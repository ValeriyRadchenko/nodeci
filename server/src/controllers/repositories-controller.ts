import { RepositoriesDB } from '../db/repositories-db';
import { Context } from 'koa';
import { BadRequestError } from '../errors/errors';
import { Repository } from '../entities';

const repositoriesDB = new RepositoriesDB();

class RepositoriesController {
    async getAll(ctx: Context, next: any) {
        try {
            ctx.body = await repositoriesDB.getAll();
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

    async get(ctx: Context, next: any) {
        try {
            ctx.body = await repositoriesDB.get(ctx.params.id);
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }


    async post(ctx: Context, next: any) {
        let {name, url, credentials, branch, project_detail_id} = ctx.request.body;

        try {
            await repositoriesDB.insert(new Repository(name, url, credentials, branch, project_detail_id));
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

    async put(ctx: Context, next: any) {
        let {name, url, credentials, branch, project_detail_id} = ctx.request.body;

        if (!name || !url || !credentials || !branch || !project_detail_id) {
            throw new BadRequestError();
        }

        let repository = new Repository(name, url, credentials, branch, project_detail_id, ctx.params.id);

        try {
            await repositoriesDB.update(repository);
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

    async delete(ctx: Context, next: any) {
        try {
            await repositoriesDB.delete(ctx.params.id);
            ctx.body = 'ok';
        } catch (error) {
            throw new BadRequestError(error.message);
        } finally {
            await next();
        }
    }

}

export const repositoriesController = new RepositoriesController();