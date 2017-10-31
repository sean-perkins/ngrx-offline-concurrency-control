import { Action } from '@ngrx/store';

export namespace Cache {
    const CATEGORY = 'CoreCache';

    export const FIND_INDEX = `${CATEGORY} Get Index`;

    export class FindIndex implements Action {
        readonly type = FIND_INDEX;
        constructor(public payload: string) { }
    }

    export type Actions =
        FindIndex;
}
