import * as Router from 'koa-router';
import { projectController } from '../controllers';

export const projectRouter = new Router();

projectRouter
    .get('/project', projectController.getAll.bind(this))
    .get('/project/:id', projectController.get.bind(this))
    .post('/project', projectController.post.bind(this))
    .put('/project/:id', projectController.put.bind(this))
    .delete('/project/:id', projectController.delete.bind(this));