import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxClipboardDirective } from './ngx-clipboard.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxClipboardDirective],
  exports: [NgxClipboardDirective]
})
export class NgxClipboardModule { }
