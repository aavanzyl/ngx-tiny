import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatePickerComponent } from './ngx-date-picker.component';

@NgModule({
  declarations: [ NgxDatePickerComponent ],
  imports: [ CommonModule, FormsModule ],
  exports: [ NgxDatePickerComponent, CommonModule, FormsModule ]
})
export class NgxDatePickerModule { }
