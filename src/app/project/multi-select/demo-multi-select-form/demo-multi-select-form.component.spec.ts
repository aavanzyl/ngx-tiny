import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMultiSelectFormComponent } from './demo-multi-select-form.component';

describe('DemoMultiSelectFormComponent', () => {
  let component: DemoMultiSelectFormComponent;
  let fixture: ComponentFixture<DemoMultiSelectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMultiSelectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMultiSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
