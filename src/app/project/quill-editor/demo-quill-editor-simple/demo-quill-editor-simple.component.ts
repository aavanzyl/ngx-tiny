import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-quill-editor-simple',
  templateUrl: './demo-quill-editor-simple.component.html',
  styleUrls: ['./demo-quill-editor-simple.component.scss'],
  preserveWhitespaces: true
})
export class DemoQuillEditorSimpleComponent {

  content = 'Hallo, this is some content for you to view';

  onContentChange(response) {
    console.log(response);
    this.content = response.html;
  }

}
