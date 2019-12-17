import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAreaComponent } from './example-area.component';

describe('ExampleAreaComponent', () => {
  let component: ExampleAreaComponent;
  let fixture: ComponentFixture<ExampleAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
