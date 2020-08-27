# ngx-tiny

Production ready Angular components build for my personal project I am now open sourcing for use by the community. 

* Light Weight Angular Component Library.
* Angular 10 Implementation
* Compatible with Angular SSR 
* Limited to no Dependencies. When ever possible and in most cases, zero dependencies are added to the modules.

Documentation can be found here : [Read ngx-tiny Docs](https://aavanzyl.github.io/ngx-tiny)

Projects I use this:
* [Advory Wedding Directory](https://advory.co.za)

### Libs:
Inputs
* [ngx-single-select][ngx-single-select]      
![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/single-select?style=flat-square)
* [ngx-multi-select][ngx-multi-select]      
![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/multi-select?style=flat-square)
* [ngx-switch-input][ngx-switch-input]      
![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/switch-input?style=flat-square)
* [ngx-date-picker][ngx-date-picker]        
![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/date-picker?style=flat-square)
* [ngx-time-picker][ngx-time-picker]        
![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/time-picker?style=flat-square)
* [ngx-quill-editor][ngx-quill-editor]      
![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/quill-editor?style=flat-square)

Components
* [ngx-code-highlight][ngx-code-highlight]      
![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/code-highlight?style=flat-square)
* [ngx-tabs][ngx-tabs]      
![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/tabs?style=flat-square)

Directives
* [ngx-clipboard][ngx-clipboard]        
![minzipped size](https://img.shields.io/bundlephobia/minzip/@ngx-tiny/clipboard?style=flat-square)

## Development

#### Local Development
1. Run `npm run build` to build all the packages, after this, to build a single package run `npm run package:<package-name>
2. Run `ng serve` to serve the documentation where the usage of the packages will be pulled in

#### Adding a new package
1. Create a new `nxg-<package-name>` under `dist`
2. Update `paths` in `tsconfig.json` to include the new package
3. Add new script to `package.json` under `package:<package-name>` that will enable compilation of package during build
4. Update `angular.js` to include the package as part of its build cycle
5. Add new package to `app/shared/shared.module.ts` for angular to import the components
6. Update the `app-routing`, `side-menu` with your new component section following other component sections patterns

#### Package Deployment
1. Update the `version` in the package being updated
2. Run `npm run build` to build all the packages ready for production
3. Commit the changes before running `npm run docs` to separate the commits from each other
4. Run `npm run docs` to compile the docs for github pages and commit changes.
5. Navigate to `dist/<package-name>` and run `npm publish` to publish the packages that was updated.

## Support

Support me by [becoming a patron](https://www.patreon.com/bePatron?u=27640996) and buying me a beer :) 

## License
See the [LICENSE][license] file.

[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md 

[ngx-single-select]: projects/ngx-single-select/README.md 
[ngx-multi-select]: projects/ngx-multi-select/README.md 
[ngx-code-highlight]: projects/ngx-code-highlight/README.md
[ngx-quill-editor]: projects/ngx-quill-editor/README.md
[ngx-switch-input]: projects/ngx-switch-input/README.md
[ngx-date-picker]: projects/ngx-date-picker/README.md
[ngx-time-picker]: projects/ngx-time-picker/README.md
[ngx-clipboard]: projects/ngx-clipboard/README.md
[ngx-tabs]: projects/ngx-tabs/README.md
