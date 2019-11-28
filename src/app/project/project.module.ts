import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AddressInputComponent } from './address-input/address-input.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { QuillInputComponent } from './quill-input/quill-input.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [SharedModule, ProjectRoutingModule],
  declarations: [
    AddressInputComponent,
    MultiSelectComponent,
    QuillInputComponent,
    SwitchInputComponent,
    TagInputComponent,
  ]
})
export class ProjectModule {}
