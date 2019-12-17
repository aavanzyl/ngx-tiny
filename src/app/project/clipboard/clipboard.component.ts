import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
  preserveWhitespaces: true
})
export class ClipboardComponent implements OnInit {

  content = 'This is some text you can copy, just click on it to copy';

  constructor() { }

  ngOnInit() {
  }

  onCopy(event) {
    alert(`Copied to Clipboard : ${event}`);
  }

}
