
import { Data } from '../actions/data';

export interface State {
    records: any[];
    loading: boolean;
    pagination?: any;
}

const initialState: State = {
    records: [],
    loading: false
};

export function reducer(state = initialState, action: Data.Actions): State {
    switch (action.type) {
        case Data.FETCH_PAGE:
            return Object.assign({}, state, {
                records: [],
                pagination: undefined,
                loading: true
            });
        case Data.FETCH_PAGE_SUCCESS:
            return Object.assign({}, state, {
                records: [...state.records, ...action.payload.content],
                pagination: action.payload,
                loading: false
            });
        case Data.FETCH_PAGE_ERROR:
            return Object.assign({}, state, {
                loading: false
            });
        default: {
            return state;
        }
    }
}

export const getRecords = (state: State) => state.records;
export const isLoading = (state: State) => state.loading;
export const getPagination = (state: State) => state.pagination;
