interface StoreIndex {
    // The collection of inner model records
    records: any[];
}

export interface CacheStore {
    // The last time the cache was written to
    lastModifiedAt?: string;
    // The last time the cache was read from
    lastAccessedAt?: string;
    // The inner collection store
    indicies: Map<string, StoreIndex>;
}

export interface State {
    store: CacheStore;
    transactionQueue: any[];
}

const initialState: State = {
    store: {
        indicies: new Map()
    },
    transactionQueue: []
};

export function reducer(state = initialState, action: any): State {
    switch (action.type) {
        // case Network.SET_NETWORK:
        //     return Object.assign({}, state, {
        //         connectionType: action.payload
        //     });
        default: {
            return state;
        }
    }
}

export const getStore = (state: State) => state.store;
export const getCacheLastModifiedAt = (state: State) => state.store ? state.store.lastAccessedAt : undefined;
export const getCacheLastAccessedAt = (state: State) => state.store ? state.store.lastAccessedAt : undefined;
export const getCacheIndicies = (state: State) => state.store ? state.store.indicies : undefined;
export const getTransactionQueue = (state: State) => state.transactionQueue;



