import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-multi-select-advance',
  templateUrl: './demo-multi-select-advance.component.html',
  styleUrls: ['./demo-multi-select-advance.component.scss'],
  preserveWhitespaces: true
})
export class DemoMultiSelectAdvanceComponent {

  selected = [];
  options = [{ id: '1', value: 'South Africa' }, { id: '2', value: 'United States' }, { id: '3', value: 'United Kingdom' }];

  get output() {
    return JSON.stringify(this.selected);
  }

  onChange(selection) {
    this.selected = selection;
  }
}
