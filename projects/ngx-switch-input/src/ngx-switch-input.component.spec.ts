import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSwitchInputComponent } from './ngx-switch-input.component';

describe('NgxSwitchInputComponent', () => {
  let component: NgxSwitchInputComponent;
  let fixture: ComponentFixture<NgxSwitchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSwitchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSwitchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
