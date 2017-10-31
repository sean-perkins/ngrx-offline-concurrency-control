import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxHttpModule, NgrxHttp, BaseNetworkService, ngrxHttpFactory } from './common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { ExampleModule } from './example/example.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpModule,
        BrowserModule,
        NgxHttpModule,
        ExampleModule
    ],
    providers: [
        {
            provide: Http,
            useFactory: ngrxHttpFactory,
            deps: [XHRBackend, RequestOptions, BaseNetworkService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
