# @ngx-tiny/multi select

Angular multiple selection dropdown.

* Angular 8 implementation
* Works with SSR
* Works alone or with angular forms 
* No Dependencies required
* String or Object Array as options

## Installation

```sh
$ npm i @ngx-tiny/multi-select
```


## Example

![Drag Racing](../assets/ngx-multi-select.png)

## Documentation

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/multi-select --save`

2. Add __NgxCodeHighlightModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxCodeExampleModule } from '@ngx-lite/code-example';

    import { AppComponent } from './app.component';

    @NgModule({
        imports: [BrowserModule, NgxCodeExampleModule],
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
    


Full Docs:


## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md 