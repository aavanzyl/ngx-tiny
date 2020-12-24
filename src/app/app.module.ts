import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SideMenuComponent } from './view/side-menu/side-menu.component';
import { LandingComponent } from './view/landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './view/about/about.component';
import { SupportComponent } from './view/support/support.component';
import { GettingStartedComponent } from './view/getting-started/getting-started.component';

import { GtagModule } from '@ngx-tiny/gtag';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    LandingComponent,
    AboutComponent,
    SupportComponent,
    GettingStartedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    GtagModule.forRoot( {trackingId : "UA-153776925-1"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
