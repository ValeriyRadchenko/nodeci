import * as Koa from 'koa';
import * as Router from 'koa-router';
import { ProjectDB } from './db/project-db';

const normalizePort = require('normalize-port');
const port = normalizePort(process.env.PORT || '3000');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx: any, next: any) => {
    let projectDB = new ProjectDB();
    ctx.body = await projectDB.getAll();
    await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, async () => {
    console.log(`Server listen port ${port}`);
});