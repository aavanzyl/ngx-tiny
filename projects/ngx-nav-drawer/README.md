# @ngx-tiny/nav-drawer

![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/nav-drawer?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/aavanzyl/ngx-tiny?style=for-the-badge)
![licence](https://img.shields.io/npm/l/@ngx-tiny/nav-drawer?style=for-the-badge)

Angular Side Navigation Overlay Drawer

* Angular 8 implementation
* Works with SSR
* No Dependencies required

## Installation

```sh
$ npm i @ngx-tiny/nav-drawer
```

## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/nav-drawer --save`

2. Add __NgxNavDrawerModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxNavDrawerModule } from '@ngx-tiny/nav-drawer';

    import { AppComponent } from './app.component';

    @NgModule({
        imports: [BrowserModule, NgxNavDrawerModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })

    export class AppModule { }

    ```
 4. Add the component to your view for basic
    ```html
    <ngx-nav-drawer [(open)]="isOpenNavigation"></ngx-nav-drawer>
    ```
    The examples above are quite basic. 
    
## Support

Support me by [becoming a patron](https://www.patreon.com/bePatron?u=27640996) and buying me a beer :) 

## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md 