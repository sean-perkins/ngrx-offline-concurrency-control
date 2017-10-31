import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    fetchPage(payload: { page: number, size: number }): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json())
            .map((res: any[]) => {
                // Fake an example API request back from a server
                const hasNext = (payload.page + 1) * payload.size < res.length;
                return {
                    content: res.splice(payload.page * payload.size, (payload.page + 1) * payload.size),
                    hasNext: hasNext,
                    nextRequest: {
                        page: payload.page + 1,
                        size: payload.size
                    }
                };
            });
    }

}
