import { DB } from './db';
import { User } from '../entities/user';
import * as md5 from 'md5';

export class UserDB extends DB {

    constructor() {
        super();
    }

    async getAll(userId?: number) {
        return super.all('SELECT * FROM User WHERE id = ?',
            userId
        );
    }

    async get(userId: number) {
        return super.get(`SELECT * FROM User WHERE id = ?`,
            userId
        );
    }

    async getByName(name: string) {
        return super.get(`SELECT * FROM User WHERE name = ?`,
            name
        );
    }

    async insert(user: User) {
        return super.run(`INSERT INTO User (name, email, password, role_id) VALUES (?, ?, ?, ?)`,
            user.name,
            user.email,
            md5(user.password),
            user.roleId
        );
    }

    async update(user: User) {
        return super.run(`UPDATE User SET name = ?, email = ?, password = ?, role_id = ? WHERE id = ?`,
            user.name,
            user.email,
            md5(user.password),
            user.roleId,
            user.id
        );
    }

    async delete(userId: number) {
        return super.run(`DELETE FROM User WHERE id = ?`,
            userId
        );
    }

}