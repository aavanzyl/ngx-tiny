import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMultiSelectComponent } from './ngx-multi-select.component';

describe('NgxMultiSelectComponent', () => {
  let component: NgxMultiSelectComponent;
  let fixture: ComponentFixture<NgxMultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMultiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
