import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSingleSelectComponent } from './ngx-single-select.component';

describe('NgxSingleSelectComponent', () => {
  let component: NgxSingleSelectComponent;
  let fixture: ComponentFixture<NgxSingleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSingleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSingleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
