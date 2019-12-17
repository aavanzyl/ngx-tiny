import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDatePickerFormsComponent } from './demo-date-picker-forms.component';

describe('DemoDatePickerFormsComponent', () => {
  let component: DemoDatePickerFormsComponent;
  let fixture: ComponentFixture<DemoDatePickerFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDatePickerFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDatePickerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
