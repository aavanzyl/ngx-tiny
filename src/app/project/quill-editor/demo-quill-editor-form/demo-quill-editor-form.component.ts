import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-quill-editor-form',
  templateUrl: './demo-quill-editor-form.component.html',
  styleUrls: ['./demo-quill-editor-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true
})
export class DemoQuillEditorFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      content: [[]]
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.myForm.value));
  }
  
}
