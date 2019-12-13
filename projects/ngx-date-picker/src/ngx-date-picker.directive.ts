import { Directive, OnInit, OnDestroy, AfterViewInit, HostListener, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { DatePickerDirectiveOptions } from './ngx-date-picker.options';
import { NgxDatePickerComponent } from './component/date-picker/ngx-date-picker.component';
import { ControlValueAccessor } from '@angular/forms';


@Directive({
    selector: '[ngx-date-picker]'
})
export class NgxDatePickerDirective extends NgxDatePickerComponent implements ControlValueAccessor, OnInit, OnChanges {

    /**
     * Set date picker's visibility state
     */
    @Input() isOpened = true;
    @ViewChild('inputElement', { static: true }) inputElement: ElementRef;

    currentOptions: DatePickerDirectiveOptions = {
        closeOnClickOutside: true,
        closeOnSelection: true,
        includeDays: 'previous-month',
        includeNextMonthsFirstFullWeek: true,
        minYear: 1900,
        maxYear: 2050,
        displayFormat: 'MMM d, yyyy',
        barTitleFormat: 'MMMM yyyy',
        dayNamesFormat: 'EEEEEE',
        rangeSeparator: '-',
        selectRange: false,
        firstCalendarDay: 0,
        barTitleIfEmpty: 'Click to select a date',
        locale: {},
        placeholder: '',
        addClass: {},
        addStyle: {},
        fieldId: this.defaultFieldId,
        useEmptyBarTitle: true,
    };



    setDate(i: number): void {
        super.setDate(i);
        if (this.currentOptions.closeOnSelection && this.range.end) {
            this.close();
        }
    }

    @HostListener('document:click', ['$event']) onBlur(e: MouseEvent) {
        if (!this.isOpened || !this.currentOptions.closeOnClickOutside) {
            return;
        }

        if (this.inputElement == null) {
            return;
        }

        if (e.target === this.inputElement.nativeElement ||
            this.inputElement.nativeElement.contains(<any>e.target) ||
            ((<any>e.target).parentElement && (<any>e.target).parentElement.classList.contains('day-unit'))
        ) {
            return;
        }

        if (this.calendarContainerElement.nativeElement !== e.target &&
            !this.calendarContainerElement.nativeElement.contains(<any>e.target) &&
            !(<any>e.target).classList.contains('year-unit') &&
            !(<any>e.target).classList.contains('month-unit')
        ) {
            this.close();
        }
    }

    close(): void {
        this.isOpened = false;

        if (this.view === 'years') {
            this.toggleView();
        }
    }

}