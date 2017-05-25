import * as Router from 'koa-router';
import { userController } from '../controllers';

export const userRouter = new Router();

userRouter
    .get('/user', userController.getAll.bind(this))
    .get('/user/:id', userController.get.bind(this))
    .post('/user', userController.post.bind(this))
    .put('/user/:id', userController.put.bind(this))
    .delete('/user/:id', userController.delete.bind(this));