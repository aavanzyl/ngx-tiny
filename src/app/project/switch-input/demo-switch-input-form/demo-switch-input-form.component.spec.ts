import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSwitchInputFormComponent } from './demo-switch-input-form.component';

describe('DemoSwitchInputFormComponent', () => {
  let component: DemoSwitchInputFormComponent;
  let fixture: ComponentFixture<DemoSwitchInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSwitchInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSwitchInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
