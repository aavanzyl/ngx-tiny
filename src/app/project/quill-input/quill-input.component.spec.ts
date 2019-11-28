import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillInputComponent } from './quill-input.component';

describe('QuillInputComponent', () => {
  let component: QuillInputComponent;
  let fixture: ComponentFixture<QuillInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuillInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
