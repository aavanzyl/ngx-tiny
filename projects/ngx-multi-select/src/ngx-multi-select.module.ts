import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMultiSelectComponent } from './ngx-multi-select.component';
import { NgxMultiSelectListComponent } from './components/ngx-multi-select-list.component';
import { NgxMultiSelectListItemComponent } from './components/ngx-multi-select-list-item.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NgxMultiSelectComponent, NgxMultiSelectListComponent, NgxMultiSelectListItemComponent],
  exports: [NgxMultiSelectComponent]
})
export class NgxMultiSelectModule {}
