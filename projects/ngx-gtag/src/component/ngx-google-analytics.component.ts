import { Component, OnInit, Renderer2 } from '@angular/core';
import { GoogleAnalyticsService } from '../service/ngx-google-analytics.service';

@Component({
  selector: 'ngx-gtag',
  template: '',
})
export class GoogleAnalyticsComponent implements OnInit {
  constructor(
    private service: GoogleAnalyticsService,
    private renderer: Renderer2
  ) {
    this.service.renderer = this.renderer;
  }

  ngOnInit(): void {
    this.service.startTracking();
  }
}
