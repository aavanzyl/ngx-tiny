import { Component, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-example-area',
  templateUrl: './example-area.component.html',
  styleUrls: ['./example-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true,
})
export class ExampleAreaComponent implements AfterViewChecked {

  @Input() addedHeight = 0;
  @Input() enableAbsolute = true;

  @ViewChild('outer', { static: true }) outer: ElementRef;
  @ViewChild('inner', { static: true }) inner: ElementRef;

  constructor() { }

  ngAfterViewChecked() {
    this.outer.nativeElement.style.height = (Number(this.inner.nativeElement.offsetHeight) + Number(this.addedHeight)) + 'px';
  }

  get isAbsolute() {
    return this.enableAbsolute === true ? 'absolute-area' : '';
  }

}
