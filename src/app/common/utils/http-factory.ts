import { XHRBackend, RequestOptions } from '@angular/http';
import { BaseNetworkService } from '../services/network.service';
import { NgrxHttp } from '../services/ngrx-http';

export function ngrxHttpFactory(backend: XHRBackend, options: RequestOptions, network: BaseNetworkService) {
    return new NgrxHttp(backend, options, network);
}
