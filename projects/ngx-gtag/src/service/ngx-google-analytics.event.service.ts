import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxGtagEvent } from '../ngx-gtag.interface';
declare var gtag: any;

@Injectable({
  providedIn: 'root',
})
export class GtagEventService {
  constructor(@Inject(PLATFORM_ID) private platform) { }

  /**
   * Event tracking is an advanced Google Analytics feature that allows you to track a specific user's interaction/activity with a web page element.
   * The user's interaction/activity with a web page element that you track in Google Analytics is called an 'event'.
   *
   * @example
   * this.gtagEventService.event({
   *  action: "newsletter sign up",
   *  options: { event_category: "marketing" }
   * });
   */
  event(event: NgxGtagEvent): void {
    if (isPlatformBrowser(this.platform)) {
      try {
        gtag('event', event.action, event.options);
      } catch (err) {
        console.error('Error occurred with googleÎ analytics event', err);
      }
    }
  }
}
