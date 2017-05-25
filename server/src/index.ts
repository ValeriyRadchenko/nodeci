import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as path from 'path';
import * as bodyParser from 'koa-bodyparser';
import { projectRouter, userRouter } from './routes';
import { errorHandler } from './errors';

const normalizePort = require('normalize-port');
const port = normalizePort(process.env.PORT || '3000');

const app = new Koa();

app.use(errorHandler);
app.use(bodyParser());

app.use(serve(path.resolve(__dirname, '..', '..', 'client', 'dist')));

app.use(projectRouter.routes());
app.use(projectRouter.allowedMethods());

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(port, () => {
    console.log(`Server listen port ${port}`);
});