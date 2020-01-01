import { Component, OnInit } from '@angular/core';
import { DateRange, DatePickerOptions } from '@ngx-tiny/date-picker';

@Component({
  selector: 'app-demo-time-picker-simple',
  templateUrl: './demo-time-picker-simple.component.html',
  styleUrls: ['./demo-time-picker-simple.component.scss'],
  preserveWhitespaces: true
})
export class DemoTimePickerSimpleComponent implements OnInit {

  singleTime: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  onChangeSingle(value: Date) {
    this.singleTime = value;
    console.log(this.singleTime);
  }

}
