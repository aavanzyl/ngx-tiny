import { Component, OnInit } from '@angular/core';
import { DateRange, DatePickerOptions } from "@ngx-tiny/date-picker"

@Component({
  selector: 'app-demo-date-picker-inline',
  templateUrl: './demo-date-picker-inline.component.html',
  styleUrls: ['./demo-date-picker-inline.component.scss'],
  preserveWhitespaces: true
})
export class DemoDatePickerInlineComponent implements OnInit {

  rangeDate: DateRange = { start: new Date("01/01/2020"), end: new Date("01/10/2020") };
  
  rangeDatePickerOptions: DatePickerOptions = {
    selectRange: true,
  };

  constructor() { }

  ngOnInit() {
  }

  onChangeRange(value: DateRange) {
    this.rangeDate = value;
    console.log(this.rangeDate);
  }

}
