const db = require('sqlite');
const path = require('path');
const config = require('./config.json');

Promise.resolve()
    .then(() => db.open(path.resolve(__dirname, config.dbName), {Promise}))
    .then(() => db.migrate({force: 'last'}))
    .catch(error => console.error(error));