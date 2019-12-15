import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePickerOptions } from '@ngx-tiny/date-picker';

@Component({
  selector: 'app-demo-date-picker-forms',
  templateUrl: './demo-date-picker-forms.component.html',
  styleUrls: ['./demo-date-picker-forms.component.scss'],
  preserveWhitespaces: true
})
export class DemoDatePickerFormsComponent implements OnInit {

  myFormSingle: FormGroup;
  myFormRange: FormGroup;

  singleDatePickerOptions: DatePickerOptions = {
    selectRange: false,
  };

  rangeDatePickerOptions: DatePickerOptions = {
    selectRange: true,
  };

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.myFormSingle = this._formBuilder.group({
      singleDate: [new Date("01/01/2020")]
    });
    this.myFormRange = this._formBuilder.group({
      rangeDate: [{ start: new Date("01/01/2020"), end: new Date("01/10/2020") }]
    });
  }

  onSubmitSingle() {
    alert(JSON.stringify(this.myFormSingle.value));
  }

  onSubmitRange() {
    alert(JSON.stringify(this.myFormRange.value));
  }


}
