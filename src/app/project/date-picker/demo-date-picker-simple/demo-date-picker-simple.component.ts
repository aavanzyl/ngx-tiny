import { Component, OnInit } from '@angular/core';
import { DatePickerOptions } from 'dist/ngx-date-picker/ngx-date-picker.options';

@Component({
  selector: 'app-demo-date-picker-simple',
  templateUrl: './demo-date-picker-simple.component.html',
  styleUrls: ['./demo-date-picker-simple.component.scss']
})
export class DemoDatePickerSimpleComponent implements OnInit {

  singleDatePickerOptions: DatePickerOptions = {
    closeOnClickOutside: false,
    closeOnSelection: false,
    includeDays: 'previous-month',
    includeNextMonthsFirstFullWeek: true,
    minYear: 1900,
    maxYear: 2050,
    displayFormat: 'MMM d, yyyy',
    barTitleFormat: 'MMM yyyy',
    dayNamesFormat: 'EEEEEE',
    rangeSeparator: '-',
    selectRange: false,
    firstCalendarDay: 0,
    locale: {},
    useEmptyBarTitle: true,
    barTitleIfEmpty: 'Click to select a date',
  };

  rangeDatePickerOptions: DatePickerOptions = {
    closeOnClickOutside: false,
    closeOnSelection: false,
    includeDays: 'previous-month',
    includeNextMonthsFirstFullWeek: true,
    minYear: 1900,
    maxYear: 2050,
    displayFormat: 'MMM d, yyyy',
    barTitleFormat: 'MMM yyyy',
    dayNamesFormat: 'EEEEEE',
    rangeSeparator: '-',
    selectRange: true,
    firstCalendarDay: 0,
    locale: {},
    useEmptyBarTitle: true,
    barTitleIfEmpty: 'Click to select a date',
  };


  constructor() { }

  ngOnInit() {
  }

}
