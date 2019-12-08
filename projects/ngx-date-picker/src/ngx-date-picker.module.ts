import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatePickerComponent } from './ngx-date-picker.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { NgxDatepickerDirective } from './ngx-date-picker.directive';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UtilitiesService } from './services/utilities.service';

@NgModule({
    declarations: [
        DatepickerComponent,
        NavigationComponent,
        NgxDatePickerComponent,
        NgxDatepickerDirective,
        SubNavigationComponent
    ],
    imports: [CommonModule],
    providers: [UtilitiesService],
    exports: [
        DatepickerComponent,
        NavigationComponent,
        NgxDatePickerComponent,
        NgxDatepickerDirective
    ],
    entryComponents: [DatepickerComponent, NgxDatePickerComponent]
})
export class NgxDatePickerModule { }
