import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.sass']
})
export class MultiSelectComponent implements OnInit {

  options = [{ value: 'test' }];

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {

  }

}
