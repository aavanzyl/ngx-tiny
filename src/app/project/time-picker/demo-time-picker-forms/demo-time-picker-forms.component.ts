import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-time-picker-forms',
  templateUrl: './demo-time-picker-forms.component.html',
  styleUrls: ['./demo-time-picker-forms.component.scss'],
  preserveWhitespaces: true
})
export class DemoTimePickerFormsComponent implements OnInit {

  myFormNull: FormGroup;
  myFormSingle: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.myFormNull = this._formBuilder.group({
      nullTime: []
    });
    this.myFormSingle = this._formBuilder.group({
      singleTime: [new Date()]
    });

    // Emulate a null value coming from the fetch API
    setTimeout(() => {
      this.myFormNull.setValue({ nullTime: null });
    }, 1000);
  }

  onSubmitSingle() {
    alert(this.myFormSingle.get('singleTime').value);
  }

  onSubmitNull() {
    alert(this.myFormNull.get('nullTime').value);
  }

}
