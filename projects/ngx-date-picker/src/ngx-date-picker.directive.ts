import { Directive, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NgxDatePickerComponent } from './component/date-picker/ngx-date-picker.component';


@Directive({
    selector: '[ngx-date-picker]'
})
export class NgxDatePickerDirective implements OnInit {


    @Input('ngx-date-picker') datePickerInstance: NgxDatePickerComponent;
    @ViewChild('inputElement', { static: true }) inputElement: ElementRef;

    constructor(public _el: ElementRef) {
    }

    ngOnInit(): void {
        this.datePickerInstance.isOpened = false;
        this.datePickerInstance.currentOptions.closeOnClickOutside = true;
        this.datePickerInstance.currentOptions.closeOnSelection = true;

        this.datePickerInstance.onChange.subscribe((value) => {
            this._el.nativeElement.value = value;
        });
    }

    @HostListener('click', ['$event'])
    onClick($event) {
        this.datePickerInstance.toggle();
    }

    @HostListener('change')
    onChange() {
        this._el.nativeElement.value = "your value";
    }

}