import { DB } from './db';
import { Repository } from '../entities';

export class RepositoriesDB extends DB {

    constructor() {
        super();
    }

    async getAll() {
        return super.all('SELECT * FROM Repository');
    }

    async get(repositoryId: number) {
        return super.get(`SELECT * FROM Repository WHERE id = ?`,
            repositoryId
        );
    }

    async insert(repository: Repository) {
        return super.run(`INSERT INTO Repository (name, url, credentials, branch, project_detail_id) VALUES (?, ?, ?, ?, ?)`,
            repository.name,
            repository.url,
            repository.credentials,
            repository.branch,
            repository.projectDetailId
        );
    }

    async update(repository: Repository) {
        return super.run(`UPDATE Repository SET name = ?, url = ?, credentials = ?, branch = ?, project_detail_id = ? WHERE id = ?`,
            repository.name,
            repository.url,
            repository.credentials,
            repository.branch,
            repository.projectDetailId,
            repository.id
        );
    }

    async delete(repositoryId: number) {
        return super.run(`DELETE FROM Repository WHERE id = ?`,
            repositoryId
        );
    }

}