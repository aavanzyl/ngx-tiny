import { Component, OnInit } from '@angular/core';
import { DateRange, DatePickerOptions } from '@ngx-tiny/date-picker';

@Component({
  selector: 'app-demo-date-picker-simple',
  templateUrl: './demo-date-picker-simple.component.html',
  styleUrls: ['./demo-date-picker-simple.component.scss'],
  preserveWhitespaces: true
})
export class DemoDatePickerSimpleComponent implements OnInit {

  singleDate: Date = new Date("10/10/1988");
  rangeDate: DateRange = { start: new Date(), end: new Date() };

  singleDatePickerOptions: DatePickerOptions = {
    selectRange: false,
  };

  rangeDatePickerOptions: DatePickerOptions = {
    selectRange: true,
  };


  constructor() { }

  ngOnInit() {
  }

  onChangeSingle(value: Date) {
    this.singleDate = value;
    console.log(this.singleDate);
  }

  onChangeRange(value: DateRange) {
    this.rangeDate = value;
    console.log(this.rangeDate);
  }

}
