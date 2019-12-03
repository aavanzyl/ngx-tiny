# @ngx-tiny/code-highlight

Angular Code Formatter.

* Angular 8 implementation
* Works with SSR
* Depends on `prismjs`

## Installation

```sh
$ npm i @ngx-tiny/code-highlight
```


## Example

![Code Highlight Example](https://raw.githubusercontent.com/aavanzyl/ngx-tiny/master/projects/assets/ngx-code-highlight.png)

## Documentation

__Full Docs:__

You can find the full documentation at https://aavanzyl.github.io/ngx-tiny which includes
* Installation instructions
* Usage and Demos
* API Reference

__Quick Start:__

1. Install with [npm](https://www.npmjs.com): `npm install @ngx-tiny/code-highlight --save`

2. Add __NgxCodeHighlightModule__ to your __@NgModule__ like example below
    ```typescript

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxCodeHighlightModule } from '@ngx-tiny/code-highlight';

    import { AppComponent } from './app.component';

    @NgModule({
        imports: [BrowserModule, NgxCodeHighlightModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })

    export class AppModule { }

    ```
 4. Add the component to your view for basic
    ```html
    <ngx-code-example>
    <![CDATA[
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxCodeHighlightModule } from '@ngx-tiny/code-highlight';
    
    import { AppComponent } from './app.component';
    
    @NgModule({
        imports: [BrowserModule, NgxCodeHighlightModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule {
    ]]>
    </ngx-code-example>   
    ```
    The examples above are quite basic. See the docs for more examples
    


## Support

Support me by [becoming a patron](https://www.patreon.com/bePatron?u=27640996) and buying me a beer :) 

## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md 