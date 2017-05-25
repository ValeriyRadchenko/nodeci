import * as Router from 'koa-router';
import { loginController } from '../controllers/login-controller';

export const loginRouter = new Router();

loginRouter
    .post('/login', loginController.login.bind(this));