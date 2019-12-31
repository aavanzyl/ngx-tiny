import { Directive, OnInit, Input, ElementRef, HostListener, OnDestroy, Output, EventEmitter, AfterViewInit, forwardRef } from '@angular/core';
import { NgxTimePickerComponent } from './ngx-time-picker.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[ngxTimePicker]',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgxTimePickerDirective), multi: true }
    ]
})
export class NgxTimePickerDirective implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

    onChangeSubscription: Subscription;

    @Input('ngxTimePicker') private timePickerInstance: NgxTimePickerComponent;

    @Input() value: Date;
    @Output() valueChange: EventEmitter<Date> = new EventEmitter();

    onChange = (_value: Date) => { };
    onTouched = () => { };

    constructor(public _el: ElementRef) {
    }

    ngOnInit(): void {

        if (!this.timePickerInstance) {
            throw new Error('Instance of <ngx-time-picker> is required for directive.');
        }

        this.timePickerInstance.isOpened = false;
        this.timePickerInstance.options.closeOnClickOutside = false;

        this.onChangeSubscription = this.timePickerInstance.valueChange.subscribe((value: Date) => {
            this._el.nativeElement.value = this.timePickerInstance.formatDisplay();
            this.valueChange.emit(value);
            this.onChange(value);
        });
    }

    ngAfterViewInit(): void {

        if (!this.value) {
            return;
        }

        this.timePickerInstance.value = this.value;
    }

    ngOnDestroy(): void {
        if (this.onChangeSubscription) {
            this.onChangeSubscription.unsubscribe();
        }
    }


    // ############# ControlValueAccessor #############

    writeValue(value: Date): void {
        this.timePickerInstance.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.timePickerInstance.disabled = isDisabled;
    }

    // ############# Click Events #############

    @HostListener('click', ['$event'])
    onClick(e: MouseEvent) {
        this.timePickerInstance.toggle();
    }

    @HostListener('document:click', ['$event'])
    onBlur(e: MouseEvent) {

        if (!this.timePickerInstance.isOpened) {
            return;
        }

        if (this._el.nativeElement !== e.target && !this.timePickerInstance.containerElement.nativeElement.contains(e.target as any)) {
            this.timePickerInstance.close();
        }
    }

}
