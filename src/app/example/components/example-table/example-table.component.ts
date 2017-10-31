import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Data } from '../../actions/data';
import { Observable } from 'rxjs/Observable';
import { getDataRecords, getDataPagination } from '../../reducers/index';
import 'rxjs/add/operator/take';

@Component({
    selector: 'example-table',
    templateUrl: './example-table.component.html',
    styleUrls: ['./example-table.component.css']
})
export class ExampleTableComponent implements OnInit {

    records$: Observable<any>;

    pagination$: Observable<any>;

    constructor(private store$: Store<any>) { }

    ngOnInit() {
        this.records$ = this.store$.select(getDataRecords);
        this.pagination$ = this.store$.select(getDataPagination);

        this.store$.dispatch(new Data.FetchPage({
            page: 0,
            size: 10
        }));

        this.records$.subscribe(res => {
            console.log('records', res);
        });

        this.pagination$.subscribe(res => {
            console.log('pagination', res);
        });
    }

    onNextPage(): void {
        this.store$.dispatch(new Data.FetchNextPage);
    }

}
