import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatePickerComponent } from './component/date-picker/ngx-date-picker.component';
import { NgxDatePickerDirective } from './ngx-date-picker.directive';

@NgModule({
  declarations: [ NgxDatePickerComponent, NgxDatePickerDirective ],
  imports: [ CommonModule, FormsModule ],
  exports: [ NgxDatePickerComponent, NgxDatePickerDirective, CommonModule, FormsModule ]
})
export class NgxDatePickerModule { }
