import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-single-select-form',
  templateUrl: './demo-single-select-form.component.html',
  styleUrls: ['./demo-single-select-form.component.scss'],
  preserveWhitespaces: true
})
export class DemoSingleSelectFormComponent implements OnInit {

  options = ['South Africa', 'United States', 'United Kingdom'];

  myForm: FormGroup;


  get output() {
    return JSON.stringify(this.myForm.get('country').value);
  }


  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      country: [[]]
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.myForm.value));
  }

}
