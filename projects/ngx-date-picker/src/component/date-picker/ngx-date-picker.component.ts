import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    ElementRef,
    forwardRef,
    ViewChild,
    TemplateRef,
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

    @ViewChild('container', { static: false }) calendarContainerElement: ElementRef;
    @ViewChild('calendarYearsContainer', { static: false }) calendarYearsContainer: ElementRef;


    @Input() value: Date;
    @Input() options: DatePickerOptions;

    /**
     * Set date picker's visibility state
     */
    @Input() isOpened = true;

    @Output() onChange: EventEmitter<Date | DateRange> = new EventEmitter();

    currentOptions: DatePickerOptions = {
        closeOnClickOutside: false,
        closeOnSelection: false,
        includeDays: 'all',
        includeNextMonthsFirstFullWeek: true,
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
        placeholder: '',
        addClass: {},
        addStyle: {},
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
        this.onChange.emit(_);
    };

    public setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    set range(val: DateRange | undefined) {
        this._range = val;

        this.onChangeCallback(this.getValueToEmit(val));
    }

    get range(): DateRange | undefined {
        return this._range;
    }

    ngOnInit() {
        this.view = 'days';
        this.range = {
            start: new Date(),
            end: new Date(),
        };
        this.viewingDate = this.value || new Date();

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
            date: date,
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
     * @param date
     */
    private isDateSelectable(date: Date): boolean {
        const minDateSet = !isNull(this.currentOptions.minDate);
        const maxDateSet = !isNull(this.currentOptions.maxDate);
        const timestamp = date.valueOf();

        return (!(minDateSet && timestamp < this.currentOptions.minDate.valueOf()) ||
            (!(maxDateSet && timestamp > this.currentOptions.maxDate.valueOf())));
    }

    private isDateSelected(date: Date): boolean {
        return isSameDate(date, this.range.start) || isSameDate(date, this.range.end);
    }

    private isInRange(date: Date): boolean {
        return this.isDateSelected(date) || (isAfter(date, this.range.start) && isBefore(date, this.range.end));
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
        return !this.range[boundary] || isSameDate(date, this.range[boundary]);
    }

    private getValueToEmit(range: DateRange): DateRange | Date {
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

        this.days = eachDayOfInterval({ start: start, end: end }).map((date) => this.formatDay(date));

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

        if (this.currentOptions.selectRange) {
            if (!this.range.start && !this.range.end) {
                this.range.start = date;
            } else if (this.range.start && !this.range.end && isAfter(date, this.range.start)) {
                this.range.end = date;
            } else {
                this.range.end = undefined;
                this.range.start = date;
            }
        } else {
            this.range.start = this.range.end = date;
        }

        this.init();
        this.onChangeCallback(this.getValueToEmit(this.range));

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

        this.years = Array.from(new Array(range), (x, i) => { return { index: i, year: i + this.currentOptions.minYear } }).map(({ index, year }) => {
            return { index: index, year: year, isThisYear: year === getYear(this.viewingDate) };
        });

    }

    scrollYears(): void {
        setTimeout(() => {
            let _heightOfYearElement = 40;
            let _yearIndex = this.years.filter(item => item.isThisYear)[0];
            let _scrollPosition = ((_yearIndex.index / 3) * _heightOfYearElement) - 30;
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
        this.scrollYears()
    }

    toggle(): void {
        this.isOpened = !this.isOpened;

        if (!this.isOpened && this.view === 'years') {
            this.toggleView();
        }

        if (this.isOpened && this.view === 'days') {
            this.viewingDate = this.range.start || this.viewingDate || new Date();
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

        if (((<any>e.target).parentElement && (<any>e.target).parentElement.classList.contains('day-unit'))) {
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
