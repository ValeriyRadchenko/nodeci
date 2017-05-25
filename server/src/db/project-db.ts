import { DB } from './db';
import { Project } from '../entities/project';
import { auth } from '../auth/auth';

export class ProjectDB extends DB {

    constructor() {
        super();
    }

    async getAll() {
        return super.all('SELECT * FROM Project WHERE user_id = ?',
            auth.getUserInfo().uid
        );
    }

    async get(projectId: number) {
        return super.get(`SELECT * FROM Project WHERE id = ? AND user_id = ?`,
            projectId,
            auth.getUserInfo().uid
        );
    }

    async insert(project: Project) {
        return super.run(`INSERT INTO Project (name, user_id) VALUES (?, ?)`,
            project.name,
            project.userId
        );
    }

    async update(project: Project) {
        return super.run(`UPDATE Project SET name = ?, user_id = ? WHERE id = ?`,
            project.name,
            project.userId,
            project.id
        );
    }

    async delete(projectId: number) {
        return super.run(`DELETE FROM Project WHERE id = ?`,
            projectId
        );
    }

}