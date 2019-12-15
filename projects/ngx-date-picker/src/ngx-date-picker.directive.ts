import { Directive, OnInit, Input, ElementRef, HostListener, OnDestroy, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { NgxDatePickerComponent } from './component/date-picker/ngx-date-picker.component';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DateRange } from './models';
import { createDateRange } from './helpers';


@Directive({
    selector: '[ngx-date-picker]'
})
export class NgxDatePickerDirective implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

    onChangeSubscription: Subscription;

    @Input('ngx-date-picker') private datePickerInstance: NgxDatePickerComponent;

    @Input('value') value: Date | DateRange;
    @Output('valueChange') valueChange: EventEmitter<Date | DateRange> = new EventEmitter();

    onChange = (_value: Date | DateRange) => { };
    onTouched = () => { };

    constructor(public _el: ElementRef) {
    }

    ngOnInit(): void {

        this.datePickerInstance.isOpened = false;
        this.datePickerInstance.currentOptions.closeOnSelection = true;
        this.datePickerInstance.currentOptions.closeOnClickOutside = false;

        this.onChangeSubscription = this.datePickerInstance.onChange.subscribe((value: Date | DateRange) => {
            this._el.nativeElement.value = this.datePickerInstance.formatDisplay();
            this.valueChange.emit(value);
        });
    }

    ngAfterViewInit(): void {

        if (this.value instanceof Date) {
            this.datePickerInstance.range = createDateRange(this.value, this.value);
        } else {
            this.datePickerInstance.range = this.value;
        }
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
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.datePickerInstance.disabled = isDisabled;
    }

    // ############# Click Events #############

    @HostListener('click', ['$event'])
    onClick(e: MouseEvent) {
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