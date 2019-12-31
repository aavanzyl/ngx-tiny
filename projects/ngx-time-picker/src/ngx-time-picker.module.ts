import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTimePickerComponent } from './ngx-time-picker.component';
import { NgxTimePickerDirective } from './ngx-time-picker.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxTimePickerComponent, NgxTimePickerDirective],
  exports: [NgxTimePickerComponent, NgxTimePickerDirective]
})
export class NgxTimePickerModule {}
