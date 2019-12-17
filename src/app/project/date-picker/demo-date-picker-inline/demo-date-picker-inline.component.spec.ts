import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDatePickerInlineComponent } from './demo-date-picker-inline.component';

describe('DemoDatePickerInlineComponent', () => {
  let component: DemoDatePickerInlineComponent;
  let fixture: ComponentFixture<DemoDatePickerInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDatePickerInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDatePickerInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
