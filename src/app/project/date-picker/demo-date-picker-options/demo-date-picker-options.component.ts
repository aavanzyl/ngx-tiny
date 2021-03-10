import { Component, OnInit } from '@angular/core';
import { DatePickerOptions } from '@ngx-tiny/date-picker';

@Component({
  selector: 'app-demo-date-picker-options',
  templateUrl: './demo-date-picker-options.component.html',
  styleUrls: ['./demo-date-picker-options.component.scss'],
  preserveWhitespaces: true
})
export class DemoDatePickerOptionsComponent implements OnInit {

  singleDate: Date = new Date();

  datePickerOptions: DatePickerOptions = {
    selectRange: true,
    closeOnClickOutside: false,
    closeOnSelection: false,
    minDate: new Date(new Date().setDate(new Date().getDate() - 7)), // Minimum is selecting a week ago
    maxDate: new Date() // Maximum date is selecting today
  };

  constructor() { }

  ngOnInit() {
  }

  onChangeRange(value: Date) {
    this.singleDate = value;
    console.log(this.singleDate);
  }

}
