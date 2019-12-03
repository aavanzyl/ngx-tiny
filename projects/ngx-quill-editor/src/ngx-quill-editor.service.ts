import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class NgxQuillEditorService {

    private _loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

    quilljs: any;

    constructor(@Inject(DOCUMENT) private readonly document: any) { }

    lazyLoadQuill(options): Observable<any> {

        let _style = '';

        if (options && options.theme === 'snow') {
            _style = '//cdn.quilljs.com/1.3.6/quill.snow.css';
        } else if (options && options.theme === 'bubble') {
            _style = '//cdn.quilljs.com/1.3.6/quill.bubble.css';
        } else {
            _style = '//cdn.quilljs.com/1.3.6/quill.core.css';
        }

        return forkJoin([
            this.loadScript('//cdn.quilljs.com/1.3.6/quill.min.js'),
            this.loadStyle(_style)
        ]);
    }

    private loadScript(url: string): Observable<any> {
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }

        this._loadedLibraries[url] = new ReplaySubject();

        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
        script.onload = () => {
            this._loadedLibraries[url].next();
            this._loadedLibraries[url].complete();
        };

        this.document.body.appendChild(script);

        return this._loadedLibraries[url].asObservable();
    }

    private loadStyle(url: string): Observable<any> {
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }

        this._loadedLibraries[url] = new ReplaySubject();

        const style = this.document.createElement('link');
        style.type = 'text/css';
        style.href = url;
        style.rel = 'stylesheet';
        style.onload = () => {
            this._loadedLibraries[url].next();
            this._loadedLibraries[url].complete();
        };

        const head = document.getElementsByTagName('head')[0];
        head.appendChild(style);

        return this._loadedLibraries[url].asObservable();
    }
}
