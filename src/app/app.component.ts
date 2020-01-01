import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  isOpenNavigation: boolean;

  constructor() { }

  ngOnInit() {
    this.isOpenNavigation = false;
  }

  toggleNavigation() {
    this.isOpenNavigation = !this.isOpenNavigation;
  }

}
