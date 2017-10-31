import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { Data } from '../actions/data';
import { State } from '../reducers/data';
import { DataService } from '../services/data.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataEffects {

    @Effect()
    fetch$ = this.actions$
        .ofType(Data.FETCH_PAGE)
        .map((action: Data.FetchPage) => action.payload)
        .exhaustMap(payload => this.fetchPage(payload));

    @Effect()
    fetchNext$ = this.actions$
        .ofType(Data.FETCH_NEXT_PAGE)
        .withLatestFrom(this.store$.select(s => s.example.data))
        .exhaustMap(([action, state]: [Data.FetchNextPage, State]) => {
            if (state.pagination) {
                if (state.pagination.hasNext) {
                    return this.fetchPage(state.pagination.nextRequest);
                }
            }
            return {
                type: 'NOOP'
            };
        });

    fetchPage(payload: any): Observable<Action> {
        return this.dataService.fetchPage(payload)
            .map(res => new Data.FetchPageSuccess(res))
            .catch(error => of(new Data.FetchPageError(error)));
    }

    constructor(
        private actions$: Actions,
        private store$: Store<any>,
        private dataService: DataService) { }

}
