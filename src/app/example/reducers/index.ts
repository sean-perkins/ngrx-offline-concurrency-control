
import * as fromData from './data';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ExampleState {
    data: fromData.State;
}

export const reducers: any = {
    data: fromData.reducer
};

export const getExampleState: any = createFeatureSelector<ExampleState>('example');

export const getDataState: any = createSelector(getExampleState, (state: ExampleState) => state.data);
export const getDataRecords: any = createSelector(getDataState, fromData.getRecords);
export const isDataLoading: any = createSelector(getDataState, fromData.isLoading);
export const getDataPagination: any = createSelector(getDataState, fromData.getPagination);
