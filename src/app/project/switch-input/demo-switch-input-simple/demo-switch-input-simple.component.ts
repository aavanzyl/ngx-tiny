import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-switch-input-simple',
  templateUrl: './demo-switch-input-simple.component.html',
  styleUrls: ['./demo-switch-input-simple.component.scss'],
  preserveWhitespaces: true
})
export class DemoSwitchInputSimpleComponent implements OnInit {

  isActive = false;

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    this.isActive = event;
  }

}
