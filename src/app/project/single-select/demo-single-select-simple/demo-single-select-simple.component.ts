import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-single-select-simple',
  templateUrl: './demo-single-select-simple.component.html',
  preserveWhitespaces: true
})
export class DemoSingleSelectSimpleComponent {

  selected = [];
  options = ['South Africa', 'United States', 'United Kingdom'];

  get output() {
    return JSON.stringify(this.selected);
  }

  onChange(selection) {
    this.selected = selection;
  }

}
