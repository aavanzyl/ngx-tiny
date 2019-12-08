import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatePickerComponent } from './ngx-date-picker.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { NgxDatePickerDirective } from './ngx-date-picker.directive';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UtilitiesService } from './services/utilities.service';
import { NgxMonthPickerComponent } from './components/month-picker/month-picker.component';
import { NgxYearPickerComponent } from './components/year-picker/year-picker.component';

@NgModule({
    declarations: [
        // Internal
        DatepickerComponent,
        NgxMonthPickerComponent,
        NgxYearPickerComponent,
        NavigationComponent,
        SubNavigationComponent,
        
        // External
        NgxDatePickerComponent,
        NgxDatePickerDirective,
    ],
    imports: [CommonModule],
    providers: [UtilitiesService],
    exports: [
        DatepickerComponent,
        NavigationComponent,
        NgxDatePickerComponent,
        NgxDatePickerDirective
    ],
    entryComponents: [DatepickerComponent, NgxDatePickerComponent]
})
export class NgxDatePickerModule { }
