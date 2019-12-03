import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-switch-input-form',
  templateUrl: './demo-switch-input-form.component.html',
  styleUrls: ['./demo-switch-input-form.component.scss'],
  preserveWhitespaces: true
})
export class DemoSwitchInputFormComponent implements OnInit {

  myForm: FormGroup;

  get isActive() {
    return this.myForm ? this.myForm.get('isActive').value : null;
  }

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      isActive: [false]
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.myForm.value));
  }

}
