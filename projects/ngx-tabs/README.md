# @ngx-tiny/tabs

![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/tabs?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/aavanzyl/ngx-tiny?style=for-the-badge)
![licence](https://img.shields.io/npm/l/@ngx-tiny/tabs?style=for-the-badge)

Angular Tabs Component.

* Angular 8 implementation
* Works with SSR
* No Dependencies required
* Support Router routes
* Lightweight

## Installation

```sh
$ npm i @ngx-tiny/tabs
```

## Example

![ngx-tabs example](https://raw.githubusercontent.com/aavanzyl/ngx-tiny/master/projects/assets/ngx-tabs.png)

## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/tabs --save`

2. Add __NgxTabsModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxTabsModule } from '@ngx-tiny/tabs';

    import { AppComponent } from './app.component';

    @NgModule({
        imports: [BrowserModule, NgxTabsModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })

    export class AppModule { }

    ```
 4. Add the component to your view for basic
    ```html
    <ngx-tabs>
        <ngx-tab [active]="true" name="Tab 1">
            Tab 1
        </ngx-tab>
        <ngx-tab name="Tab 2">
            Tab 2
        </ngx-tab>
        <ngx-tab name="Tab 3">
            Tab 3
        </ngx-tab>
    </ngx-tabs>
    ```
    The examples above are quite basic. The picker has much more features and configurations. 
    
## Support

Support me by [becoming a patron](https://www.patreon.com/bePatron?u=27640996) and buying me a beer :) 

## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md 