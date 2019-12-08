import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilitiesService } from './services/utilities.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgxDatePickerComponent } from './ngx-date-picker.component';

describe('NgxDatePickerComponent', () => {
    let component: NgxDatePickerComponent;
    let fixture: ComponentFixture<NgxDatePickerComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [NgxDatePickerComponent, NavigationComponent],
                providers: [UtilitiesService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDatePickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
