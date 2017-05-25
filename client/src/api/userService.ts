import AbstractService from './abstractService';
import config from '../config';


class UserService extends AbstractService {
    constructor(config: any) {
        super(config.api);
    }

    login(data: object) {
        return this.post({
            path: `/project`,
            body: data
        });
    }
}

export const userService = new UserService(config);
