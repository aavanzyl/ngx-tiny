import { Directive, OnInit, Input, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { NgxDatePickerComponent } from './component/date-picker/ngx-date-picker.component';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';


@Directive({
    selector: '[ngx-date-picker]'
})
export class NgxDatePickerDirective implements OnInit, OnDestroy, ControlValueAccessor {

    onChangeSubscription: Subscription;

    @Input('ngx-date-picker') private datePickerInstance: NgxDatePickerComponent;

    constructor(public _el: ElementRef) {
    }

    ngOnInit(): void {
        this.datePickerInstance.isOpened = false;
        this.datePickerInstance.currentOptions.closeOnSelection = true;
        this.datePickerInstance.currentOptions.closeOnClickOutside = false;

        this.onChangeSubscription = this.datePickerInstance.onChange.subscribe((value) => {
            this._el.nativeElement.value = this.datePickerInstance.formatDisplay();
        });
    }

    ngOnDestroy(): void {
        if (this.onChangeSubscription) {
            this.onChangeSubscription.unsubscribe();
        }
    }



    // ############# ControlValueAccessor #############

    writeValue(obj: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnChange(fn: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }

    // ############# Click Events #############

    @HostListener('click', ['$event'])
    onClick($event) {
        this.datePickerInstance.toggle();
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