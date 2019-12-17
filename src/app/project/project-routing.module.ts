import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressInputComponent } from './address-input/address-input.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { CodeHighlightComponent } from './code-highlight/code-highlight.component';
import { TabsComponent } from './tabs/tabs.component';
import { DemoRouteAComponent } from './tabs/demo-route-a/demo-route-a.component';
import { DemoRouteBComponent } from './tabs/demo-route-b/demo-route-b.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

const routes: Routes = [
  { path: 'address-input', component: AddressInputComponent },
  { path: 'multi-select', component: MultiSelectComponent },
  { path: 'quill-editor', component: QuillEditorComponent },
  { path: 'switch-input', component: SwitchInputComponent },
  { path: 'tag-input', component: TagInputComponent },
  { path: 'code-highlight', component: CodeHighlightComponent },
  { path: 'date-picker', component: DatePickerComponent },
  { path: 'clipboard', component: ClipboardComponent },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      { path: 'demo-route-a', component: DemoRouteAComponent },
      { path: 'demo-route-b', component: DemoRouteBComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
