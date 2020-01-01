import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// NGX Tiny Modules
import { NgxSingleSelectModule } from '@ngx-tiny/single-select';
import { NgxMultiSelectModule } from '@ngx-tiny/multi-select';
import { NgxCodeHighlightModule } from '@ngx-tiny/code-highlight';
import { NgxTabsModule } from '@ngx-tiny/tabs';
import { NgxQuillEditorModule } from '@ngx-tiny/quill-editor';
import { NgxSwitchInputModule } from '@ngx-tiny/switch-input';
import { NgxClipboardModule } from '@ngx-tiny/clipboard';
import { NgxDatePickerModule } from '@ngx-tiny/date-picker';
import { NgxTimePickerModule } from '@ngx-tiny/time-picker';
import { NgxNavDrawerModule } from '@ngx-tiny/nav-drawer';
import { ExampleAreaComponent } from './example-area/example-area.component';

const modules = [
  NgxSingleSelectModule,
  NgxMultiSelectModule,
  NgxCodeHighlightModule,
  NgxTabsModule,
  NgxQuillEditorModule,
  NgxSwitchInputModule,
  NgxClipboardModule,
  NgxDatePickerModule,
  NgxTimePickerModule,
  NgxNavDrawerModule
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...modules],
  exports: [CommonModule, ReactiveFormsModule, ...modules, ExampleAreaComponent],
  declarations: [ExampleAreaComponent]
})
export class SharedModule { }
