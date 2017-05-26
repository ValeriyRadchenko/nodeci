import * as Router from 'koa-router';
import { repositoriesController } from '../controllers';
import { jwt } from '../controllers/login-controller';

export const repositoriesRouter = new Router();

repositoriesRouter
    .use(jwt)
    .get('/repository', repositoriesController.getAll.bind(this))
    .get('/repository/:id', repositoriesController.get.bind(this))
    .post('/repository', repositoriesController.post.bind(this))
    .put('/repository/:id', repositoriesController.put.bind(this))
    .delete('/repository/:id', repositoriesController.delete.bind(this));