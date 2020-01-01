# @ngx-tiny/clipboard

![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/clipboard?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/aavanzyl/ngx-tiny?style=for-the-badge)
![licence](https://img.shields.io/npm/l/@ngx-tiny/clipboard?style=for-the-badge)

Angular Copy Paste Clipboard Directive. Copy content on a click.

* Angular 8 implementation
* Works with SSR
* No Dependencies required

## Installation

```sh
$ npm i @ngx-tiny/clipboard
```

## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/clipboard --save`

2. Add __NgxClipboardDirective__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxClipboardDirective } from '@ngx-tiny/clipboard';

    import { AppComponent } from './app.component';

    @NgModule({
        imports: [BrowserModule, NgxClipboardDirective],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })

    export class AppModule { }

    ```
 4. Add the component to your view for basic
    ```html
    <div [ngxClipboard]="content">{{content}}</div>
    ```
    The examples above are quite basic. 
    
## Support

Support me by [becoming a patron](https://www.patreon.com/bePatron?u=27640996) and buying me a beer :) 

## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md 