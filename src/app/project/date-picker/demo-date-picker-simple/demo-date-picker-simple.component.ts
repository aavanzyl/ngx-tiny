import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-date-picker-simple',
  templateUrl: './demo-date-picker-simple.component.html',
  styleUrls: ['./demo-date-picker-simple.component.scss']
})
export class DemoDatePickerSimpleComponent implements OnInit {

  datepickerOptions = {
    selectMultiple: false, // Select multiple dates
    closeOnSelect: false, // Close datepicker when date(s) selected
    animationSpeed: 400, // Animation speed in ms
    easing: 'ease-in', // Easing type string
    hideRestDays: false, // Hide the rest days
    disableRestDays: true, // Disable the click on rest days
    hideNavigation: false, // Hide the navigation
    range: false, // Use range functionality
    currentDate: new Date(), // Tne current displayed date (month, year)
    timeoutBeforeClosing: 5000, // The timeout / delay before closing
    weekdayFormat: 'short', // "narrow", "short", "long"
    weekStart: 'monday' // Set the week start day
  };

  dates = [];

  constructor() { }

  ngOnInit() {
  }

}
