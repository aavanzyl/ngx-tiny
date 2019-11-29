import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { NgxMultiSelectModule } from '@ngx-tiny/multi-select';
import { NgxCodeHighlightModule } from '@ngx-tiny/code-highlight';


const modules = [
  NgxMultiSelectModule,
  NgxCodeHighlightModule
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...modules],
  exports: [CommonModule, ReactiveFormsModule, ...modules],
  declarations: []
})
export class SharedModule {}
