import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { reducers } from './reducers';
import { DataEffects } from './effects/data';
import { DataService } from './services/data.service';
import { ExampleTableComponent } from './components/example-table/example-table.component';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('example', reducers),
        EffectsModule.forFeature([DataEffects])
    ],
    providers: [
        DataService
    ],
    declarations: [ExampleTableComponent],
    exports: [
        ExampleTableComponent
    ]
})
export class ExampleModule { }
