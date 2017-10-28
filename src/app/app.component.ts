import { Component, OnInit } from '@angular/core';

import { Network, BaseNetworkService, getCoreHttpState } from './common';
import { Actions } from '@ngrx/effects';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    title = 'app';

    constructor(
        private actions$: Actions,
        private http: Http,
        private networkService: BaseNetworkService) { }

    ngOnInit() {
        this.listenToConnectionChange();
        this.testOutboundAPICall();
    }

    private testOutboundAPICall() {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(res => {
                console.log('result', res.json());
            });
    }

    private listenToConnectionChange() {
        this.networkService.connectionType$.subscribe(payload => {
            console.log(`Current Connection Type: ${payload}`);
        });
    }
}
