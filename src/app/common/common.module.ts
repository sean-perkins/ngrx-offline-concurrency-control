import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { BaseNetworkService } from './services/network.service';
import { StoreModule } from '@ngrx/store';
import { NetworkEffects } from './effects/network';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import * as tokens from './tokens';

const providers = [
    {
        provide: tokens.NetworkDetectToken,
        useValue: true
    },
    BaseNetworkService
];

@NgModule({
    imports: [
        StoreModule.forFeature('coreHttp', reducers),
        EffectsModule.forFeature([NetworkEffects])
    ],
    providers: [
        ...providers
    ]
})
export class NgxHttpModule {

    static forRoot(configuredProviders: any[] = []): ModuleWithProviders {
        return {
            ngModule: NgxHttpModule,
            providers: [
                ...providers,
                ...configuredProviders
            ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: NgxHttpModule) {
        if (parentModule) {
            throw new Error('NgxHttpModule already loaded. Import into the root module only.');
        }
    }

}
