import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    ElementRef,
    forwardRef,
    ViewChild,
    ViewEncapsulation,
    HostListener,
    Output,
    EventEmitter
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


import {
    startOfMonth,
    endOfMonth,
    addMonths,
    subMonths,
    setYear,
    eachDayOfInterval,
    getDate,
    getMonth,
    getYear,
    isToday,
    isSameMonth,
    format,
    getDay,
    subDays,
    setDay,
    isAfter, isBefore, addDays, setMonth,
} from 'date-fns';

import { isSameDate, createDateRange, isNull } from '../../helpers';
import { DateRange, Day } from '../../models';
import { DatePickerOptions, AddClass } from '../../ngx-date-picker.options';


// instanceID for calculating the auto-incrementing field ID
let instanceID = 0;

@Component({
    selector: 'ngx-date-picker',
    templateUrl: 'ngx-date-picker.component.html',
    styleUrls: ['ngx-date-picker.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgxDatePickerComponent), multi: true }
    ]
})
export class NgxDatePickerComponent implements ControlValueAccessor, OnInit, OnChanges {

    @ViewChild('container') calendarContainerElement: ElementRef;
    @ViewChild('calendarYearsContainer') calendarYearsContainer: ElementRef;


    @Input() value: Date | DateRange;
    @Input() options: DatePickerOptions;

    /**
     * Set date picker's visibility state
     */
    @Input() isOpened = true;

    @Output() valueChange: EventEmitter<Date | DateRange> = new EventEmitter();

    currentOptions: DatePickerOptions = {
        closeOnClickOutside: false,
        closeOnSelection: true,
        includeDays: 'all',
        includeNextMonthsFirstFullWeek: false,
        minYear: 1900,
        maxYear: 2050,
        displayFormat: 'MMM d, yyyy',
        barTitleFormat: 'MMM yyyy',
        dayNamesFormat: 'EEEEEE',
        rangeSeparator: '-',
        selectRange: false,
        firstCalendarDay: 0,
        barTitleIfEmpty: 'Click to select a date',
        locale: {},
        fieldId: this.defaultFieldId,
        useEmptyBarTitle: true,
    };

    displayValue: string;
    viewingDate: Date;
    barTitle: string;
    view: 'days' | 'months' | 'years';
    years: { index: number, year: number; isThisYear: boolean }[];
    months: { month: number; name: string; isSelected: boolean }[];
    dayNames: string[];
    days: Day[];
    fieldId: string;
    disabled: boolean;

    private _range: DateRange;

    private onTouchedCallback: () => void = () => { };
    private onChangeCallback: (_: Date | DateRange) => void = (_) => {
        this.valueChange.emit(_);
    }

    public setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    set range(val: DateRange | undefined) {
        this._range = val;
    }

    get range(): DateRange | undefined {
        return this._range;
    }

    ngOnInit() {

        if (typeof startOfMonth === 'undefined') {
            throw new Error('module date-fns is required by <ngx-date-picker> to function.');
        }

        this.view = 'days';
        this.range = this.range || {
            start: new Date(),
            end: new Date(),
        };

        if (this.value && !(this.value instanceof Date)) {
            this.range = this.value;
            this.viewingDate = this.range.start;
        } else if (this.value && this.value instanceof Date) {
            this.viewingDate = this.value;
        } else {
            this.viewingDate = this.range.start;
        }

        this.initDayNames();
        this.initYears();
        this.initMonths();

        this.init();
    }

    ngOnChanges(changes: SimpleChanges) {
        if ('options' in changes) {
            this.updateOptions(changes.options.currentValue);
            this.initDayNames();
            this.init();
            this.initYears();
            this.initMonths();
        }
    }

    get defaultFieldId(): string {
        // Only evaluate and increment if required
        const value = `ngx-date-picker-${instanceID++}`;
        Object.defineProperty(this, 'defaultFieldId', { value });

        return value;
    }

    updateOptions(options: DatePickerOptions): void {
        this.currentOptions = {
            ...this.currentOptions,
            ...options,
        };
    }

    writeValue(val: DateRange | Date | string | undefined) {
        if (val) {
            if (typeof val === 'string') {
                this.range.start = this.range.end = new Date(val);
            } else if (val instanceof Date) {
                this.range.start = this.range.end = val;
            } else if (val.start) { // Checking if it's instance of DateRange
                this.range = val;
            } else {
                throw Error('Invalid input data type');
            }

            this.viewingDate = this.range.start || this.viewingDate || new Date();

            this.init();
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    formatDay = (date: Date, isVisible: boolean = true): Day => (
        {
            date,
            day: getDate(date),
            month: getMonth(date),
            year: getYear(date),
            inThisMonth: isSameMonth(date, this.viewingDate),
            isToday: isVisible && isToday(date),
            isSelected: isVisible && this.isDateSelected(date),
            isInRange: isVisible && this.isInRange(date),
            isSelectable: isVisible && this.isDateSelectable(date),
            isStart: isVisible && this.isRangeBoundary(date, 'start'),
            isEnd: isVisible && this.isRangeBoundary(date, 'end'),
            isVisible,
        }
    )

    getDayClasses(day: Day): AddClass {
        return {
            'is-prev-month': !day.inThisMonth,
            'is-today': day.isToday,
            'is-selected': day.isSelected,
            'is-in-range': day.isInRange,
            'is-disabled': !day.isSelectable,
            'range-start': day.isStart,
            'range-end': day.isEnd,
            'is-visible': day.isVisible,
        };
    }

    /**
     * Checks if specified date is in range of min and max dates
     */
    private isDateSelectable(date: Date): boolean {
        const minDateSet = !isNull(this.currentOptions.minDate);
        const maxDateSet = !isNull(this.currentOptions.maxDate);
        const timestamp = date.valueOf();

        return (!(minDateSet && timestamp < this.currentOptions.minDate.valueOf()) ||
            (!(maxDateSet && timestamp > this.currentOptions.maxDate.valueOf())));
    }

    private isDateSelected(date: Date): boolean {
        return this.range && this.range.start ? isSameDate(date, this.range.start) || isSameDate(date, this.range.end) : false;
    }

    private isInRange(date: Date): boolean {
        return this.isDateSelected(date) || this.range && this.range.start ? (isAfter(date, this.range.start) && isBefore(date, this.range.end)) : false;
    }

    public formatDisplay(): string {
        if (!this.range) {
            return '';
        }

        const formattedStartDate = format(this.range.start, this.currentOptions.displayFormat, this.currentOptions.locale);

        if (this.currentOptions.selectRange) {
            const formattedEndDate = format(
                this.range.end || this.range.start,
                this.currentOptions.displayFormat,
                this.currentOptions.locale
            );

            return `${formattedStartDate} ${this.currentOptions.rangeSeparator} ${formattedEndDate}`;
        }

        return formattedStartDate;
    }

    private isRangeBoundary(date: Date, boundary: 'start' | 'end'): boolean {
        return this.range ? !this.range[boundary] || isSameDate(date, this.range[boundary]) : false;
    }

    private getValueToEmit(range: DateRange): DateRange | Date {

        if (!range || !range.start) {
            return null;
        }

        if (!this.currentOptions.selectRange) {
            return new Date(range.start.getTime());
        }

        if (range.end) {
            return createDateRange(range.start, range.end);
        }

        return createDateRange(range.start, range.start);
    }

    // ############### Day #################

    init(): void {
        if (!this.viewingDate) {
            return;
        }

        const start = startOfMonth(this.viewingDate);
        const end = endOfMonth(this.viewingDate);

        this.days = eachDayOfInterval({ start, end }).map((date) => this.formatDay(date));

        const firstMonthDay = getDay(start) - this.currentOptions.firstCalendarDay;
        const prevDays = firstMonthDay < 0 ? 7 - this.currentOptions.firstCalendarDay : firstMonthDay;
        let nextDays = (this.currentOptions.firstCalendarDay === 1 ? 7 : 6) - getDay(end);

        const showPrevMonthDays = this.currentOptions.includeDays === 'all' || this.currentOptions.includeDays === 'previous-month';
        const showNextMonthDays = this.currentOptions.includeDays === 'all' || this.currentOptions.includeDays === 'next-month';

        if (showNextMonthDays && this.currentOptions.includeNextMonthsFirstFullWeek) {
            nextDays += 7;
        }

        for (let i = 1; i <= prevDays; i++) {
            this.days.unshift(this.formatDay(subDays(start, i), showPrevMonthDays));
        }

        new Array(nextDays).fill(undefined)
            .forEach((_, i) => this.days.push(this.formatDay(addDays(end, i + 1), showNextMonthDays)));


        this.displayValue = this.formatDisplay();

        if (this.range) {
            this.barTitle = format(this.viewingDate, this.currentOptions.barTitleFormat, this.currentOptions.locale);
        } else {
            this.barTitle = this.currentOptions.useEmptyBarTitle ?
                this.currentOptions.barTitleIfEmpty :
                format(this.viewingDate, this.currentOptions.barTitleFormat, this.currentOptions.locale);
        }
    }

    setDate(i: number): void {
        const date = this.days[i].date;

        const _range: any = this.range || {};

        if (this.currentOptions.selectRange) {
            if (!this.range || (!this.range.start && !this.range.end)) {
                _range.start = date;
            } else if (this.range.start && !this.range.end && isAfter(date, this.range.start)) {
                _range.end = date;
            } else {
                _range.end = undefined;
                _range.start = date;
            }
        } else {
            _range.start = _range.end = date;
        }

        this.range = _range;

        this.init();
        this.onChangeCallback(this.getValueToEmit(this.range));

        // Close if last value is selected
        if (this.currentOptions.closeOnSelection && this.range.end) {
            this.close();
        }
    }

    initDayNames(): void {
        this.dayNames = [];
        const start = this.currentOptions.firstCalendarDay;

        for (let i = start; i <= 6 + start; i++) {
            const date = setDay(new Date(), i);

            this.dayNames.push(format(date, this.currentOptions.dayNamesFormat, this.currentOptions.locale));
        }
    }

    // ############### Month ###############

    setMonth(i: number): void {
        this.viewingDate = setMonth(this.viewingDate, this.months[i].month);
        this.init();
        this.initMonths();
        this.view = 'days';
    }

    initMonths(): void {
        this.months = Array.from(new Array(12), (x, i) => setMonth(new Date(), i))
            .map((date) => {
                return { month: date.getMonth(), name: format(date, 'MMM'), isSelected: date.getMonth() === getMonth(this.viewingDate) };
            });
    }

    nextMonth(): void {
        this.viewingDate = addMonths(this.viewingDate, 1);
        this.init();
    }

    prevMonth(): void {
        this.viewingDate = subMonths(this.viewingDate, 1);
        this.init();
    }

    // ############### Year ################


    initYears(): void {
        const range = this.currentOptions.maxYear - this.currentOptions.minYear;

        /* tslint:disable */
        // Ignore the rule due to the uniqeness of the arrow chain.
        this.years = Array.from(new Array(range), (x, i) => { return { index: i, year: i + this.currentOptions.minYear }; }).map(({ index, year }) => {
            return { index: index, year: year, isThisYear: year === getYear(this.viewingDate) };
        });
        /* tslint:enable */
    }

    scrollYears(): void {
        setTimeout(() => {
            const _heightOfYearElement = 40;
            const _yearIndex = this.years.filter(item => item.isThisYear)[0];
            const _scrollPosition = ((_yearIndex.index / 3) * _heightOfYearElement) - 30;
            this.calendarYearsContainer.nativeElement.scroll(0, _scrollPosition);
        }, 100);
    }

    setYear(i: number): void {
        this.viewingDate = setYear(this.viewingDate, this.years[i].year);
        this.init();
        this.initYears();
        this.view = 'months';
    }

    // ############### Container ################

    toggleView(): void {
        this.view = this.view === 'days' ? 'years' : 'days';
        this.scrollYears();
    }

    toggle(): void {
        this.isOpened = !this.isOpened;

        if (!this.isOpened && this.view === 'years') {
            this.toggleView();
        }

        if (this.isOpened && this.view === 'days') {
            this.viewingDate = this.range && this.range.start ? this.range.start : this.viewingDate || new Date();
            this.init();
        }
    }

    reset(): void {
        this.range = {
            start: new Date(),
            end: new Date(),
        };
        this.init();
    }

    // ############### Misc ################

    @HostListener('document:click', ['$event']) onBlur(e: MouseEvent) {

        if (!this.isOpened || !this.currentOptions.closeOnClickOutside) {
            return;
        }

        if (((e.target as any).parentElement && (e.target as any).parentElement.classList.contains('day-unit'))) {
            return;
        }

        if (this.calendarContainerElement.nativeElement !== e.target &&
            !this.calendarContainerElement.nativeElement.contains(e.target as any) &&
            !(e.target as any).classList.contains('year-unit') &&
            !(e.target as any).classList.contains('month-unit')
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
