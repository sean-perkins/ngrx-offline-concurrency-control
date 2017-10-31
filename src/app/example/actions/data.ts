import { Action } from '@ngrx/store';

export namespace Data {

    const CATEGORY = 'Data';

    export const FETCH_PAGE = `${CATEGORY} Fetch Page`;
    export const FETCH_PAGE_SUCCESS = `${CATEGORY} Fetch Page Success`;
    export const FETCH_PAGE_ERROR = `${CATEGORY} Fetch Page Error`;
    export const FETCH_NEXT_PAGE = `${CATEGORY} Fetch Next Page`;

    export class FetchPage implements Action {
        readonly type = FETCH_PAGE;
        constructor(public payload: {
            page: 0,
            size: 10
        }) { }
    }

    export class FetchPageSuccess implements Action {
        readonly type = FETCH_PAGE_SUCCESS;
        constructor(public payload: {
            content: any[]
        }) { }
    }

    export class FetchPageError implements Action {
        readonly type = FETCH_PAGE_ERROR;
        constructor(public payload?: any) { }
    }

    export class FetchNextPage implements Action {
        readonly type = FETCH_NEXT_PAGE;
        payload = null;
    }

    export type Actions =
        FetchPage
        | FetchPageSuccess
        | FetchPageError
        | FetchNextPage;

}
