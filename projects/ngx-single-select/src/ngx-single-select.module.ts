import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSingleSelectComponent } from './ngx-single-select.component';
import { NgxSingleSelectListItemComponent } from './components/ngx-single-select-list-item.component';
import { NgxSingleSelectListComponent } from './components/ngx-single-select-list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NgxSingleSelectComponent, NgxSingleSelectListComponent, NgxSingleSelectListItemComponent],
  exports: [NgxSingleSelectComponent]
})
export class NgxSingleSelectModule {}
