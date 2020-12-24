# @ngx-tiny/gtag

![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/gtag?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/aavanzyl/ngx-tiny?style=for-the-badge)
![licence](https://img.shields.io/npm/l/@ngx-tiny/gtag?style=for-the-badge)

Angular Google Analytics.

* Angular 10 implementation
* Works with SSR
* Page view service
* Event Service
* No Dependencies required

## Installation

```sh
$ npm i @ngx-tiny/gtag
```

## Documentation

__Quick Start:__
 
1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/gtag --save`

2. Add __NgxGtagModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { GtagModule } from '@ngx-tiny/gtag';

    import { AppComponent } from './app.component';

    @NgModule({
        imports: [
            BrowserModule,
            GtagModule.forRoot( {trackingId : "<Your Tracking ID>"})
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })

    export class AppModule { }

    ```
 3. Add the component to your `app.component.html` to load the scripts and start logging page views
    ```html
    <ngx-gtag></ngx-gtag>
    ```

__Event:__   

```typescript
import { Component, OnInit } from '@angular/core';
import { GtagEventService } from '@ngx-tiny/gtag';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  constructor(
    private gtagEventService: GtagEventService
  ) { }

  ngOnInit() {
    this.gtagEventService.event({
      action: "landing",
      options: { event_category: "landing loaded" }
    });
  }

}

```
    
## Support

Support me by [becoming a patron](https://www.patreon.com/bePatron?u=27640996) and buying me a beer :) 

## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md 