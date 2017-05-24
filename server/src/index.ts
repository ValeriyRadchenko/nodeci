import * as Koa from 'koa';
import { Commander, ICommanderExecuteResult } from './commander/commander';

const normalizePort = require('normalize-port');
const port = normalizePort(process.env.PORT || '3000');

const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello World';
});

app.listen(port, async () => {
    console.log(`Server listen port ${port}`);
});