# @ngx-tiny/date-picker

Angular Date Picker.

* Angular 8 implementation
* Works with SSR
* Works alone or with angular forms 
* Only Depends on date-fns for localization
* Single Or Range Selection
* Themeable to own requirements

## Installation

```sh
$ npm i @ngx-tiny/date-picker
```


## Example

![Date Picker](https://raw.githubusercontent.com/aavanzyl/ngx-tiny/master/projects/assets/ngx-date-picker.png)
## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* Styling Reference
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/date-picker --save`

2. Add __NgxDatePickerModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxDatePickerModule } from '@ngx-tiny/date-picker';

    import { AppComponent } from './app.component';

    @NgModule({
        imports: [BrowserModule, NgxDatePickerModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })

    export class AppModule { }

    ```
 4. Add the component to your view for basic
    ```html
    <div class="form-group">
        <label>Single Date</label>
        <input class="form-control" placeholder="Select Date" 
            [ngxDatePicker]="dateInstanceSingle" 
            [value]="singleDate"
            (valueChange)="onChangeSingle($event)">
        <ngx-date-picker #dateInstanceSingle [options]="singleDatePickerOptions"></ngx-date-picker>
    </div>
    ```
    or for Angular forms
    ```html 
    <form [formGroup]="myFormSingle" (ngSubmit)="onSubmitSingle()">
        <div class="form-group">
            <label>Single Date</label>
            <input class="form-control" placeholder="Select Date" 
                formControlName="singleDate"
                [ngxDatePicker]="dateInstanceOne" >
            <ngx-date-picker #dateInstanceOne [options]="singleDatePickerOptions"></ngx-date-picker>
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