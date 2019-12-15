export interface DatePickerOptions {
    closeOnClickOutside?: boolean;
    closeOnSelection?: boolean;
    includeDays?: 'none' | 'previous-month' | 'next-month' | 'all';
    includeNextMonthsFirstFullWeek?: boolean;
    minYear?: number; // default: current year - 30
    maxYear?: number; // default: current year + 30
    displayFormat?: string; // default: 'MMM D[,] YYYY'
    barTitleFormat?: string; // default: 'MMMM YYYY'
    dayNamesFormat?: string; // default 'ddd'
    barTitleIfEmpty?: string;
    selectRange?: boolean;
    rangeSeparator?: string; // default '-'
    firstCalendarDay?: number; // 0 = Sunday (default), 1 = Monday, ..
    locale?: object;
    minDate?: Date;
    maxDate?: Date;
    /** Placeholder for the input field */
    placeholder?: string;
    /** [ngClass] to add to the input field */
    addClass?: AddClass;
    /** [ngStyle] to add to the input field */
    addStyle?: { [k: string]: any } | null;
    /** ID to assign to the input field */
    fieldId?: string;
    /** If false, barTitleIfEmpty will be disregarded and a date will always be shown. Default: true */
    useEmptyBarTitle?: boolean;
}

export type AddClass = string | string[] | { [k: string]: boolean } | null;
