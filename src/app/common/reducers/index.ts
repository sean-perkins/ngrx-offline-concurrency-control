
import * as fromNetwork from './network';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface NgHttpState {
    network: fromNetwork.State;
}

export const reducers: any = {
    network: fromNetwork.reducer
};

export const getCoreHttpState: any = createFeatureSelector<NgHttpState>('coreHttp');

export const getNetworkState: any = createSelector(getCoreHttpState, (state: NgHttpState) => state.network);
export const getNetworkConnectionType: any = createSelector(getNetworkState, fromNetwork.getConnectionType);
