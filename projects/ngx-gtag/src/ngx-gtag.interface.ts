export interface NgxGtag {
  trackingId: string;
  options?: any;
}

export interface NgxGtagList {
  [index: number]: {
    trackingId: string;
    options?: any;
  };
}

export interface NgxGtagEvent {
  trackingId?: string;
  action: string;
  options: any;
}
