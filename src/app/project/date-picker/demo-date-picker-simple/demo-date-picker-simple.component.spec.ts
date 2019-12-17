import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDatePickerSimpleComponent } from './demo-date-picker-simple.component';

describe('DemoDatePickerSimpleComponent', () => {
  let component: DemoDatePickerSimpleComponent;
  let fixture: ComponentFixture<DemoDatePickerSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDatePickerSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDatePickerSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
