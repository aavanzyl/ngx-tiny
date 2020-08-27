# @ngx-tiny/quill-editor

![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/quill-editor?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/aavanzyl/ngx-tiny?style=for-the-badge)
![licence](https://img.shields.io/npm/l/@ngx-tiny/quill-editor?style=for-the-badge)

Angular Quill Editor.

* Angular 10 implementation
* Works with SSR
* Lazy Loads `quill` script and styling when init the first time on a view 
* Works with Angular Forms and Standalone

## Installation

```sh
$ npm i @ngx-tiny/quill-editor
```


## Example

![Code Highlight Example](https://raw.githubusercontent.com/aavanzyl/ngx-tiny/master/projects/assets/ngx-quill-editor.png)

## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/quill-editor --save`

2. Add __NgxQuillEditorModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxQuillEditorModule } from '@ngx-tiny/quill-editor';
    
    import { AppComponent } from './app.component';
    
    @NgModule({
        imports: [BrowserModule, NgxQuillEditorModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    
    export class AppModule { }

    ```
 4. Add the component to your view for basic
    ```html
    <ngx-quill-editor [content]="content" (changed)="onContentChange($event)"></ngx-quill-editor>
    ```
    or for Angular forms
    ```html 
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <ngx-quill-editor formControlName="content"></ngx-quill-editor>
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