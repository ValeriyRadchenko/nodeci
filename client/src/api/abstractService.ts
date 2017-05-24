import * as http from 'http';
import * as _ from 'lodash';

interface Options {
    path?: string;
    method?: string;
    hostname?: string;
    port?: number;
}

export default class AbstractService {

    options: any;

    constructor(options = {}) {
        this.options = {};
        
        _.merge(this.options, options);        
    }

    private async request(method: string, options: Options = {}) {
        let requestOptions: Options = {
            method
        };

        _.merge(requestOptions, options);

        const rawResponce = await fetch(`http://${this.options.localHost}:${this.options.localPort}${requestOptions.path}`, requestOptions);
        
        return rawResponce.json().catch(() => rawResponce);
    }

    get(options = {}) {              
        return this.request('GET', options);
    }

    post(options = {}) {
        return this.request('POST', options);
    }

    delete(options = {}) {
        return this.request('DELETE', options);
    }

}
