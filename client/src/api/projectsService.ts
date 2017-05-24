import AbstractService from './abstractService';
import config from '../config'


class ProjectsService extends AbstractService {
    constructor(config: any) {
        super(config.api);
    }

    list() {
        return this.get({
            path: `/project`
        });
    }
}

export const projectsService = new ProjectsService(config);