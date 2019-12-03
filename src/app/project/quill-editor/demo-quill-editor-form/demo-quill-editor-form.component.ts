import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-quill-editor-form',
  templateUrl: './demo-quill-editor-form.component.html',
  styleUrls: ['./demo-quill-editor-form.component.scss'],
  preserveWhitespaces: true
})
export class DemoQuillEditorFormComponent implements OnInit {

  myForm: FormGroup;

  get content() {
    return this.myForm ? this.myForm.get('content').value : null;
  }

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      content: ['A example of angular form usage.']
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.myForm.value));
  }

}
