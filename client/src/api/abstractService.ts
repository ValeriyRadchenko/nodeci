import * as http from 'http';
import * as _ from 'lodash';

interface Options {
    path?: string;
    method?: string;
    hostname?: string;
    port?: number;
    body?: any;
    headers?: any;
}

interface Responce {
    success?: boolean;
    payload?: any;
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

        requestOptions.headers = {
          ...(requestOptions.headers || {}),
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token')
        };

        if (typeof requestOptions.body === 'object') {
          requestOptions.body = JSON.stringify(requestOptions.body);
        }

        const rawResponce = await fetch(`http://${this.options.localHost}:${this.options.localPort}${requestOptions.path}`, requestOptions);

        let response: Responce = {};

        try {
          response.payload = await rawResponce.json();
        } catch (e) {}

        response.success = !(rawResponce.status >= 400 && rawResponce.status <= 500);

        return response;
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
