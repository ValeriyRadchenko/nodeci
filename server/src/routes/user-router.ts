import * as Router from 'koa-router';
import { userController } from '../controllers';
import { jwt } from '../controllers/login-controller';

export const userRouter = new Router();

userRouter
    .use(jwt)
    .get('/user', userController.getAll.bind(this))
    .get('/user/:id', userController.get.bind(this))
    .post('/user', userController.post.bind(this))
    .put('/user/:id', userController.put.bind(this))
    .delete('/user/:id', userController.delete.bind(this));