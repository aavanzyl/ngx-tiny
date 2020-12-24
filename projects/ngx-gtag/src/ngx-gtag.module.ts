import { CommonModule } from '@angular/common';
import {
    NgModule,
    ModuleWithProviders,
    Optional,
    SkipSelf,
} from '@angular/core';
import { NGX_GTAG_CONFIG } from './ngx-gtag.token';
import { NgxGtag, NgxGtagList } from './ngx-gtag.interface';
import { GoogleAnalyticsComponent } from './component/ngx-google-analytics.component';

@NgModule({
    imports: [CommonModule],
    declarations: [GoogleAnalyticsComponent],
    exports: [GoogleAnalyticsComponent],
})
export class GtagModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: GtagModule
    ) {
        if (parentModule) {
            throw new Error(
                '@ngx-tiny/ngx-gtag should only be loaded in one module, preferably your root or core module.'
            );
        }
    }
    static forRoot(
        options: NgxGtag | NgxGtagList
    ): ModuleWithProviders<GtagModule> {
        return {
            ngModule: GtagModule,
            providers: [
                {
                    provide: NGX_GTAG_CONFIG,
                    useValue: options,
                },
            ],
        };
    }
}
