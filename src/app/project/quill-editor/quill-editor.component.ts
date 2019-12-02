import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true
})
export class QuillEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
