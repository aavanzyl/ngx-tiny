import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AddressInputComponent } from './address-input/address-input.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { QuillInputComponent } from './quill-input/quill-input.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { ProjectRoutingModule } from './project-routing.module';
import { DemoMultiSelectSimpleComponent } from './multi-select/demo-multi-select-simple/demo-multi-select-simple.component';
import { DemoMultiSelectFormComponent } from './multi-select/demo-multi-select-form/demo-multi-select-form.component';
import { DemoMultiSelectDisabledComponent } from './multi-select/demo-multi-select-disabled/demo-multi-select-disabled.component';
import { DemoMultiSelectAdvanceComponent } from './multi-select/demo-multi-select-advance/demo-multi-select-advance.component';

@NgModule({
  imports: [SharedModule, ProjectRoutingModule],
  declarations: [
    AddressInputComponent,
    MultiSelectComponent,
    QuillInputComponent,
    SwitchInputComponent,
    TagInputComponent,
    DemoMultiSelectSimpleComponent,
    DemoMultiSelectFormComponent,
    DemoMultiSelectDisabledComponent,
    DemoMultiSelectAdvanceComponent,
  ]
})
export class ProjectModule {}
