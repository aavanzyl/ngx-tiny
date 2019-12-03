# @ngx-tiny/switch-input

Angular Switch Input.

* Angular 8 implementation
* Works with SSR
* No Dependencies
* Works with Angular Forms and Standalone

## Installation

```sh
$ npm i @ngx-tiny/switch-input
```


## Example

![Switch Input Example](https://raw.githubusercontent.com/aavanzyl/ngx-tiny/master/projects/assets/ngx-switch-input.png)

## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/quill-editor --save`

2. Add __NgxSwitchInputModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxSwitchInputModule } from '@ngx-tiny/switch-input';
    
    import { AppComponent } from './app.component';
    
    @NgModule({
        imports: [BrowserModule, NgxSwitchInputModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    
    export class AppModule { }

    ```
 4. Add the component to your view for basic
    ```html
    <ngx-switch-input 
        label="Toggle Me" 
        [value]="isActive" 
        (valueChange)="onChange($event)">
    </ngx-switch-input>
    ```
    or for Angular forms
    ```html 
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <ngx-switch-input label="Toggle Me" formControlName="isActive"></ngx-switch-input>
        <br/>
        <button class="btn" type="submit">Submit</button>
    </form>
    ```
    The examples above are basic. See more examples in the docs.
    

## Support

Support me by [becoming a patron](https://www.patreon.com/bePatron?u=27640996) and buying me a beer :) 

## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md 