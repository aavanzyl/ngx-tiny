import { Directive, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NgxDatePickerComponent } from './component/date-picker/ngx-date-picker.component';


@Directive({
    selector: '[ngx-date-picker]'
})
export class NgxDatePickerDirective implements OnInit {

    @Input('ngx-date-picker') datePickerInstance: NgxDatePickerComponent;

    constructor(public _el: ElementRef) {
    }

    ngOnInit(): void {
        this.datePickerInstance.isOpened = false;
        this.datePickerInstance.currentOptions.closeOnSelection = true;
        this.datePickerInstance.currentOptions.closeOnClickOutside = false;

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

    @HostListener('document:click', ['$event']) 
    onBlur(e: MouseEvent) {

        if (!this.datePickerInstance.isOpened) {
            return;
        }

        if (((<any>e.target).parentElement && (<any>e.target).parentElement.classList.contains('day-unit'))) {
            return;
        }

        if (this._el.nativeElement !== e.target &&
            !this.datePickerInstance.calendarContainerElement.nativeElement.contains(<any>e.target) &&
            !(<any>e.target).classList.contains('year-unit') &&
            !(<any>e.target).classList.contains('month-unit')
        ) {
            this.datePickerInstance.close();
        }
    }

}