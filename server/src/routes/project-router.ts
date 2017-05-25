import * as Router from 'koa-router';
import { projectController } from '../controllers';
import { jwt } from '../controllers/login-controller';

export const projectRouter = new Router();

projectRouter
    .use(jwt)
    .get('/project', projectController.getAll.bind(this))
    .get('/project/:id', projectController.get.bind(this))
    .post('/project', projectController.post.bind(this))
    .put('/project/:id', projectController.put.bind(this))
    .delete('/project/:id', projectController.delete.bind(this));
