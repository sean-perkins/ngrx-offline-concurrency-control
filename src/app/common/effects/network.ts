import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Network } from '../actions/network';

@Injectable()
export class NetworkEffects {

    @Effect()
    networkConnection$: Observable<Action> = this.actions$
        .ofType(Network.SET_NETWORK)
        .map((action: Network.SetNetwork) => action.payload)
        .map(payload => {
            switch (payload) {
                case 'wifi':
                    return new Network.NetworkWifi();
                case '3G':
                    return new Network.Network3G();
                case 'offline':
                    return new Network.NetworkOffline();
            }
        });

    constructor(private actions$: Actions) { }
}
