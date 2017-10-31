import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Network } from '../actions/network';
import { NetworkType } from '../utils';
import * as tokens from '../tokens';
import { getNetworkConnectionType } from '../reducers';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';

@Injectable()
export class BaseNetworkService {

    // Observables funnel values through stremams, Subject allows us to access the direct value from memory
    onNetworkChange: BehaviorSubject<NetworkType> = new BehaviorSubject(undefined);

    constructor(
        @Inject(tokens.NetworkDetectToken) autoDetectNetworkChange: boolean,
        private store$: Store<any>) {
        if (autoDetectNetworkChange) {
            // Check if the user is on a browser
            this.handleBrowserAutoDetect();
        }
        this.connectionType$
            .do(type => this.onNetworkChange.next(type))
            .subscribe();
    }

    /**
     * Connection Type convenience selector
     */
    get connectionType$(): Observable<NetworkType> {
        return this.store$.select(getNetworkConnectionType);
    }

    /**
     * Dispatches to update the connection type
     * @param type The new connection type state
     */
    updateConnection(type: NetworkType): void {
        this.store$.dispatch(new Network.SetNetwork(type));
    }

    /**
     * Auto-detect network status change status on a browser-enabled client
     */
    private handleBrowserAutoDetect() {
        if (typeof window !== 'undefined') {
            // Find current online status
            if (typeof navigator !== 'undefined') {
                this.updateConnection(navigator.onLine ? 'wifi' : 'offline');
            }
            // Establish listener events for connection changes
            window.addEventListener('online', () => this.updateConnection('wifi'));
            window.addEventListener('offline', () => this.updateConnection('offline'));
        }
    }

}
