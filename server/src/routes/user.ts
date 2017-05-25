import * as Router from 'koa-router';
import { userController } from '../controllers';

export const userRouter = new Router();

userRouter
    .get('/user', userController.getAll.bind(this));