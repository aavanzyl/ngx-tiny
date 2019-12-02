import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoQuillEditorFormComponent } from './demo-quill-editor-form.component';

describe('DemoQuillEditorFormComponent', () => {
  let component: DemoQuillEditorFormComponent;
  let fixture: ComponentFixture<DemoQuillEditorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoQuillEditorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoQuillEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
