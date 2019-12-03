import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// NGX Tiny Modules
import { NgxMultiSelectModule } from '@ngx-tiny/multi-select';
import { NgxCodeHighlightModule } from '@ngx-tiny/code-highlight';
import { NgxTabsModule } from '@ngx-tiny/tabs';
import { NgxQuillEditorModule } from '@ngx-tiny/quill-editor';
import { NgxSwitchInputModule } from '@ngx-tiny/switch-input';


const modules = [
  NgxMultiSelectModule,
  NgxCodeHighlightModule,
  NgxTabsModule,
  NgxQuillEditorModule,
  NgxSwitchInputModule
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...modules],
  exports: [CommonModule, ReactiveFormsModule, ...modules],
  declarations: []
})
export class SharedModule { }
