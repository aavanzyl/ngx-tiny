import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDatePickerOptionsComponent } from './demo-date-picker-options.component';

describe('DemoDatePickerOptionsComponent', () => {
  let component: DemoDatePickerOptionsComponent;
  let fixture: ComponentFixture<DemoDatePickerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDatePickerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDatePickerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
