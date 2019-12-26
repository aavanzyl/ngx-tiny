import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-multi-select-simple',
  templateUrl: './demo-multi-select-simple.component.html',
  preserveWhitespaces: true
})
export class DemoMultiSelectSimpleComponent {

  selected = [];
  options = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria'];

  get output() {
    return JSON.stringify(this.selected);
  }

  onChange(selection) {
    this.selected = selection;
  }


}
