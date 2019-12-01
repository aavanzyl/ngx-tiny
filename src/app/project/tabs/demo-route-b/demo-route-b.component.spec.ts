import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouteBComponent } from './demo-route-b.component';

describe('DemoRouteBComponent', () => {
  let component: DemoRouteBComponent;
  let fixture: ComponentFixture<DemoRouteBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRouteBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRouteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
