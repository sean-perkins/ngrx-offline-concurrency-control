import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxHttpModule } from './common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        BrowserModule,
        NgxHttpModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
