import { Network } from '../actions/network';
import { NetworkType } from '../utils';

export interface State {
    // The device's current connection status type
    connectionType: NetworkType;
}

const initialState: State = {
    connectionType: undefined
};

export function reducer(state = initialState, action: Network.Actions): State {
    switch (action.type) {
        case Network.SET_NETWORK:
            return Object.assign({}, state, {
                connectionType: action.payload
            });
        default: {
            return state;
        }
    }
}

export const getConnectionType = (state: State) => state.connectionType;
export const isOffline = (state: State) => state.connectionType === 'offline';
export const isOnline = (state: State) => state.connectionType && state.connectionType !== 'offline';
export const isWifi = (state: State) => state.connectionType === 'wifi';
export const is3G = (state: State) => state.connectionType === '3G';
