import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-single-select-advance',
  templateUrl: './demo-single-select-advance.component.html',
  styleUrls: ['./demo-single-select-advance.component.scss'],
  preserveWhitespaces: true
})
export class DemoSingleSelectAdvanceComponent {

  selected = [];
  options = [{ id: '1', value: 'South Africa' }, { id: '2', value: 'United States' }, { id: '3', value: 'United Kingdom' }];

  get output() {
    return JSON.stringify(this.selected);
  }

  onChange(selection) {
    this.selected = selection;
  }
}
