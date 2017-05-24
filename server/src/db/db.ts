import * as path from 'path';
const db = require('sqlite');
const config = require('../../../config.json');

export class DB {

    initializePromise: Promise<any>;

    constructor() {
        this.initializePromise = db.open(path.resolve(__dirname, '..', '..', '..', config.dbName), {Promise})
            .catch((error: Error) => console.error(error));
    }

    initialize() {
        return this.initializePromise;
    }

    all(...args: any[]) {
        return this.initialize()
            .then(() => db.all.apply(db, arguments))
            .catch(error => console.error(error));
    }

    get(...args: any[]) {
        return this.initialize()
            .then(() => db.get.apply(db, arguments))
            .catch(error => console.error(error));
    }

}