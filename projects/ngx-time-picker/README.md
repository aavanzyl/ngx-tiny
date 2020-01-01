# @ngx-tiny/time-picker

![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/time-picker?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/aavanzyl/ngx-tiny?style=for-the-badge)
![licence](https://img.shields.io/npm/l/@ngx-tiny/time-picker?style=for-the-badge)

![Time Picker Inline](https://raw.githubusercontent.com/aavanzyl/ngx-tiny/master/projects/assets/ngx-time-picker.png)

Angular Time Picker.

* Angular 8 implementation
* Works with SSR
* Works alone or with angular forms 
* Depends on time-fns for localization
* Themeable to own requirements


## Installation

```sh
$ npm i @ngx-tiny/time-picker
```


## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* Styling Reference
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/time-picker --save`

2. Add __NgxTimePickerModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxTimePickerModule } from '@ngx-tiny/time-picker';

    import { AppComponent } from './app.component';

    @NgModule({
        imports: [BrowserModule, NgxTimePickerModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })

    export class AppModule { }

    ```
 4. Add the component to your view for basic
    ```html
    <div class="form-group">
        <label>Single Time</label>
        <input class="form-control" placeholder="Select Time" 
            [ngxTimePicker]="timeInstanceSingle" 
            [value]="singleDate"
            (valueChange)="onChangeSingle($event)">
        <ngx-time-picker #timeInstanceSingle></ngx-time-picker>
    </div>
    ```
    or for Angular forms
    ```html 
    <form [formGroup]="myFormSingle" (ngSubmit)="onSubmitSingle()">
        <div class="form-group">
            <label>Single Date</label>
            <input class="form-control" placeholder="Select Date" 
                formControlName="singleDate"
                [ngxTimePicker]="timeInstanceOne" >
            <ngx-time-picker #timeInstanceOne></ngx-time-picker>
            <button class="btn" type="submit">Submit</button>
        </div>
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