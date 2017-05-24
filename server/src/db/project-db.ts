import { DB } from './db';

export class ProjectDB extends DB {

    constructor() {
        super();
    }

    async getAll() {
        return super.all('SELECT * FROM Project');
    }

}