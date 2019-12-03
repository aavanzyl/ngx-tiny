import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSwitchInputSimpleComponent } from './demo-switch-input-simple.component';

describe('DemoSwitchInputSimpleComponent', () => {
  let component: DemoSwitchInputSimpleComponent;
  let fixture: ComponentFixture<DemoSwitchInputSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSwitchInputSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSwitchInputSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
