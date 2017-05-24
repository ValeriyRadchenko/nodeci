import { DB } from './db';
import { Project } from '../project/project';

export class ProjectDB extends DB {

    constructor() {
        super();
    }

    async getAll() {
        return super.all('SELECT * FROM Project');
    }

    async add(project: Project) {
        return super.run(`INSERT INTO Project (name, user_id) VALUES (?, ?)`,
            project.name,
            project.userId
        );
    }

}