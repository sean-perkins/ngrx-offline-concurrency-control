import { Action } from '@ngrx/store';
import { NetworkType } from '../utils';
/**
 * Network Actions used for handling internet connection statuses
 * @author Sean Perkins <sean-perkins | sean@meetmaestro.com>
 */
export namespace Network {

    const CATEGORY = 'CoreNetwork';

    export const NETWORK_OFFLINE = `${CATEGORY} Network Offline`;
    export const NETWORK_WIFI = `${CATEGORY} Network Wifi`;
    export const NETWORK_3G = `${CATEGORY} Network 3G`;

    export const SET_NETWORK = `${CATEGORY} Set Network`;

    export class SetNetwork implements Action {
        readonly type = SET_NETWORK;
        /**
         * Sets the active network connection type
         * @param payload The current connection status
         */
        constructor(public payload: NetworkType) { }
    }

    /**
     * Action dispatched when the device is offline
     */
    export class NetworkOffline implements Action {
        readonly type = NETWORK_OFFLINE;
        payload = null;
    }

    /**
     * Action dispatched when the device is on wifi
     */
    export class NetworkWifi implements Action {
        readonly type = NETWORK_WIFI;
        payload = null;
    }

    /**
     * Action dispatched when the device is on 3G
     */
    export class Network3G implements Action {
        readonly type = NETWORK_3G;
        payload = null;
    }

    export type Actions
        = SetNetwork
        | NetworkOffline
        | NetworkWifi
        | Network3G;
}

