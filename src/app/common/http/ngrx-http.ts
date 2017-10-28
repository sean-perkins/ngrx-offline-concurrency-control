import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NgrxHttp extends Http {

    constructor(backend: XHRBackend, options: RequestOptions) {
        // TODO rely on the auth state for this
        // const token = localStorage.getItem('auth_token');
        // options.headers.set('Authorization', `Bearer ${token}`);
        super(backend, options);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        // const token = localStorage.getItem('auth_token');
        if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
            if (!options) {
                // let's make option object
                options = { headers: new Headers() };
            }
            // options.headers.set('Authorization', `Bearer ${token}`);
        } else {
            // we have to add the token to the url object
            // url.headers.set('Authorization', `Bearer ${token}`);
        }
        return super.request(url, options).catch(this.catchErrors(this));
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
