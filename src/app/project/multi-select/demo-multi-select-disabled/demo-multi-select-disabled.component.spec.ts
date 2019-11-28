import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMultiSelectDisabledComponent } from './demo-multi-select-disabled.component';

describe('DemoMultiSelectDisabledComponent', () => {
  let component: DemoMultiSelectDisabledComponent;
  let fixture: ComponentFixture<DemoMultiSelectDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMultiSelectDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMultiSelectDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
