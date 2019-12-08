# @ngx-tiny/date-picker

Angular multiple selection dropdown.

* Angular 8 implementation
* Works with SSR
* Works alone or with angular forms 
* No Dependencies required

## Installation

```sh
$ npm i @ngx-tiny/date-picker
```


## Example

![Date Picker Example](https://raw.githubusercontent.com/aavanzyl/ngx-tiny/master/projects/assets/ngx-date-picker.png)
## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/date-picker --save`

2. Add __NgxMultiSelectModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxMultiSelectModule } from '@ngx-tiny/date-picker';

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
    <ngx-date-picker 
        placeholder="Select a Country" 
        [options]="options" 
        (valueChange)="onChange($event)">
    </ngx-date-picker>
    ```
    or for Angular forms
    ```html 
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <ngx-date-picker 
            formControlName="country" 
            [options]="options" 
            placeholder="Select a Country" >
        </ngx-date-picker>
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