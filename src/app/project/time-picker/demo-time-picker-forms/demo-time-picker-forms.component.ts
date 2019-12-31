import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePickerOptions } from '@ngx-tiny/date-picker';

@Component({
  selector: 'app-demo-time-picker-forms',
  templateUrl: './demo-time-picker-forms.component.html',
  styleUrls: ['./demo-time-picker-forms.component.scss'],
  preserveWhitespaces: true
})
export class DemoTimePickerFormsComponent implements OnInit {

  myFormNull: FormGroup;
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
    this.myFormNull = this._formBuilder.group({
      nullDate: []
    });
    this.myFormSingle = this._formBuilder.group({
      singleDate: [new Date('01/01/2020')]
    });
    this.myFormRange = this._formBuilder.group({
      rangeDate: [{ start: new Date('01/01/2020'), end: new Date('01/10/2020') }]
    });

    // Emulate a null value coming from the fetch API
    setTimeout(() => {
      this.myFormNull.setValue({ nullDate: null });
    }, 1000);
  }

  onSubmitSingle() {
    alert(this.myFormSingle.get('singleDate').value);
  }

  onSubmitNull() {
    alert(this.myFormNull.get('nullDate').value);
  }

  onSubmitRange() {
    const _start = this.myFormRange.get('rangeDate').value.start;
    const _end = this.myFormRange.get('rangeDate').value.end;
    alert(`${_start} - ${_end}`);
  }


}
