# @ngx-tiny/multi-select

![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/multi-select?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/aavanzyl/ngx-tiny?style=for-the-badge)
![licence](https://img.shields.io/npm/l/@ngx-tiny/multi-select?style=for-the-badge)

![Multi Select](https://raw.githubusercontent.com/aavanzyl/ngx-tiny/master/projects/assets/ngx-multi-select.png)

Angular multiple selection dropdown.

* Angular 10 implementation
* Works with SSR
* Dynamic filtering of items
* Supports Keyboard navigation (arrow, space and enter keys)
* Works alone or with angular forms 
* No Dependencies required
* String or Object Array as options
* Themeable to own requirements

## Installation

```sh
$ npm i @ngx-tiny/multi-select
```

## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* Styling Reference
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/multi-select --save`

2. Add __NgxMultiSelectModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxMultiSelectModule } from '@ngx-tiny/multi-select';

    import { AppComponent } from './app.component';

    @NgModule({
        imports: [BrowserModule, NgxMultiSelectModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })

    export class AppModule { }

    ```
 4. Add the component to your view for basic
    ```html
    <ngx-multi-select 
        placeholder="Select a Country" 
        [options]="options" 
        (valueChange)="onChange($event)">
    </ngx-multi-select>
    ```
    or for Angular forms
    ```html 
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <ngx-multi-select 
            formControlName="country" 
            [options]="options" 
            placeholder="Select a Country" >
        </ngx-multi-select>
        <button class="btn" type="submit">Submit</button>
    </form>
    ```
    The examples above are quite basic. The picker has much more features and configurations. 
    
## Support

Support me by [becoming a patron](https://www.patreon.com/bePatron?u=27640996) and buying me a beer :) 

## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md 