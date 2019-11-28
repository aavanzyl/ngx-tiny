import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-multi-select-simple',
  templateUrl: './demo-multi-select-simple.component.html'
})
export class DemoMultiSelectSimpleComponent implements OnInit {

  options = ['South Africa' ];


  constructor() { }

  ngOnInit() {
  }

  onChange(event) {

  }

}
