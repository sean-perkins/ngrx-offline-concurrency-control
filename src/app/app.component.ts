import { Component, OnInit } from '@angular/core';

import { Network, BaseNetworkService, getCoreHttpState } from './common';
import { Actions } from '@ngrx/effects';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    title = 'app';

    constructor(
        private actions$: Actions,
        private networkService: BaseNetworkService) { }

    ngOnInit() {
        this.listenToConnectionChange();
    }

    private listenToConnectionChange() {
        this.networkService.connectionType$.subscribe(payload => {
            console.log(`Current Connection Type: ${payload}`);
        });
    }
}
