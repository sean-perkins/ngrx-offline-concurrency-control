import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { BaseNetworkService } from './network.service';

@Injectable()
export class NgrxHttp extends Http {

    constructor(
        backend: XHRBackend,
        options: RequestOptions,
        private networkService: BaseNetworkService) {
        // TODO rely on the auth state for this
        // const token = localStorage.getItem('auth_token');
        // options.headers.set('Authorization', `Bearer ${token}`);
        super(backend, options);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        const connectonType = this.networkService.onNetworkChange.getValue();
        switch (connectonType) {
            case 'wifi':
            case '3G':
                // If true, we have to add the token to the options - not in the url
                if (typeof url === 'string') {
                    if (!options) {
                        options = {
                            headers: new Headers()
                        };
                    }
                    // options.headers.set('Authorization', `Bearer ${token}`);
                } else {
                    // we have to add the token to the url object
                    // url.headers.set('Authorization', `Bearer ${token}`);
                }
                return super.request(url, options).catch(this.catchErrors(this));
            case 'offline':
                console.log('user is offline - do not send API call, pull local');
                // Fake response for now - we will pull data soon or queue a transaction
                return of(new Response(<ResponseOptions>{
                    body: JSON.stringify([{ firstName: 'Offline User' }]),
                    status: 200,
                    headers: null,
                    url: url.toString(),
                }));
        }
    }

    private catchErrors(self: NgrxHttp) {
        return (res: Response) => {
            console.log(res);
            if (res.status === 401 || res.status === 403) {
                // if not authenticated
                console.log(res);
            }
            return Observable.throw(res);
        };
    }
}
