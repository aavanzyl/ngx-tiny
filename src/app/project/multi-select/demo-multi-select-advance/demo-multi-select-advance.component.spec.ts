import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMultiSelectAdvanceComponent } from './demo-multi-select-advance.component';

describe('DemoMultiSelectAdvanceComponent', () => {
  let component: DemoMultiSelectAdvanceComponent;
  let fixture: ComponentFixture<DemoMultiSelectAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMultiSelectAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMultiSelectAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
