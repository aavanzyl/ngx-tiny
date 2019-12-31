export interface TimePickerOptions {
    hoursStep?: number;
    minutesStep?: number;
    military?: boolean;
    closeOnClickOutside?: boolean;
    displayFormat?: string; // default: 'MMM D[,] YYYY'
    locale?: object;
}
