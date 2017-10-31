import { reducer } from './network';
import { Network } from '../actions/network';

const testState = {
    connectionType: undefined,
    offlineAt: undefined
};

describe('Network reducer', () => {

    it('should return the current state when no valid actions have been dispatched', () => {
        const state = testState;
        const actual = reducer(state, {
            type: 'INVALID_ACTION',
            payload: null
        });
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should set the connectionType when SET_NETWORK is dispatched', () => {
        const state = testState;
        const actual = reducer(state, {
            type: Network.SET_NETWORK,
            payload: 'wifi'
        });
        const expected = 'wifi';
        expect(actual.connectionType).toBe(expected);
    });

    it('should set the offlineAt timestamp when NETWORK_OFFLINE is dispatched', () => {
        const state = testState;
        const actual = reducer(state, {
            type: Network.NETWORK_OFFLINE,
            payload: undefined
        });
        expect(actual.offlineAt).toBeDefined();
        expect(Date.parse(actual.offlineAt)).not.toBeNaN();
    });

});
