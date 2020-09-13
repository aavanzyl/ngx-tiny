import { Directive, OnInit, Input, ElementRef, HostListener, OnDestroy, Output, EventEmitter, AfterViewInit, forwardRef } from '@angular/core';
import { NgxDatePickerComponent } from './component/date-picker/ngx-date-picker.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DateRange } from './models';
import { createDateRange } from './helpers';


@Directive({
    selector: '[ngxDatePicker]',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgxDatePickerDirective), multi: true }
    ]
})
export class NgxDatePickerDirective implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

    onChangeSubscription: Subscription;

    @Input('ngxDatePicker') private datePickerInstance: NgxDatePickerComponent;

    @Input() value: Date | DateRange;
    @Output() valueChange: EventEmitter<Date | DateRange> = new EventEmitter();

    onChange = (_value: Date | DateRange) => { };
    onTouched = () => { };

    constructor(public _el: ElementRef) {
    }

    ngOnInit(): void {

        if (!this.datePickerInstance) {
            throw new Error('Instance of <ngx-date-picker> is required for directive.');
        }

        this.datePickerInstance.isOpened = false;
        // this.datePickerInstance.currentOptions.closeOnSelection = true;
        this.datePickerInstance.currentOptions.closeOnClickOutside = false;

        this.onChangeSubscription = this.datePickerInstance.valueChange.subscribe((value: Date | DateRange) => {
            this._el.nativeElement.value = this.datePickerInstance.formatDisplay();
            this.valueChange.emit(value);
            this.onChange(value);
        });

    }

    ngAfterViewInit(): void {

        if (!this.value) {
            return;
        }

        if (this.value instanceof Date) {
            this.datePickerInstance.range = createDateRange(this.value, this.value);
        } else {
            this.datePickerInstance.range = this.value;
        }

        this.datePickerInstance.valueChange.emit(this.datePickerInstance.getValueToEmit(this.datePickerInstance.range));
    }

    ngOnDestroy(): void {
        if (this.onChangeSubscription) {
            this.onChangeSubscription.unsubscribe();
        }
    }


    // ############# ControlValueAccessor #############

    writeValue(value: Date | DateRange): void {

        if (value instanceof Date) {
            this.datePickerInstance.range = createDateRange(value, value);
        } else {
            this.datePickerInstance.range = value;
        }

        this.datePickerInstance.valueChange.emit(this.datePickerInstance.getValueToEmit(this.datePickerInstance.range));
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

        if (((e.target as any).parentElement && (e.target as any).parentElement.classList.contains('day-unit'))) {
            return;
        }

        if (this._el.nativeElement !== e.target &&
            !this.datePickerInstance.calendarContainerElement.nativeElement.contains(e.target as any) &&
            !(e.target as any).classList.contains('year-unit') &&
            !(e.target as any).classList.contains('month-unit')
        ) {
            this.datePickerInstance.close();
        }
    }

}
