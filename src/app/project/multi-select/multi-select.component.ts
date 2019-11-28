import { Component, OnInit } from '@angular/core';
import { MultiSelectAdvanceOptions } from '../../../../dist/ngx-multi-select/ngx-multi-select.options';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.sass']
})
export class MultiSelectComponent implements OnInit {

  options = [{value: "test"}];

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {

  }

}
