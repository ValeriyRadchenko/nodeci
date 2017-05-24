import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as serve from 'koa-static';
import { ProjectDB } from './db/project-db';
import * as path from 'path';

const normalizePort = require('normalize-port');
const port = normalizePort(process.env.PORT || '3000');

const app = new Koa();
const router = new Router();

router.get('/project', async (ctx: any, next: any) => {
    let projectDB = new ProjectDB();
    ctx.body = await projectDB.getAll();
    await next();
});

// app.use(serve(path.resolve(__dirname, '..', '..', 'client', 'dist')));
app.use(serve('./client/dist'));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
    console.log(`Server listen port ${port}`);
});