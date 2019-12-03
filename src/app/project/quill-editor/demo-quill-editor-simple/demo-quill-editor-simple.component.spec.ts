import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoQuillEditorSimpleComponent } from './demo-quill-editor-simple.component';

describe('DemoQuillEditorSimpleComponent', () => {
  let component: DemoQuillEditorSimpleComponent;
  let fixture: ComponentFixture<DemoQuillEditorSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoQuillEditorSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoQuillEditorSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
