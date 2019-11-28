import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { NgxMultiSelectModule } from '@ngx-tiny/multi-select';


const modules = [
  NgxMultiSelectModule
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...modules],
  exports: [CommonModule, ReactiveFormsModule, ...modules],
  declarations: []
})
export class SharedModule {}
