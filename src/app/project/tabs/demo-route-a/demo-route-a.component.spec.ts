import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouteAComponent } from './demo-route-a.component';

describe('DemoRouteAComponent', () => {
  let component: DemoRouteAComponent;
  let fixture: ComponentFixture<DemoRouteAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRouteAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRouteAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
