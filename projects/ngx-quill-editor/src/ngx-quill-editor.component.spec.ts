import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuillEditorComponent } from './ngx-quill-editor.component';

@Component({
  template: `
    <div class="quill-editor"></div>
  `
})
class TestComponent { }

describe('NgxQuillEditorComponent', () => {
  let component: NgxQuillEditorComponent;
  let fixture: ComponentFixture<NgxQuillEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxQuillEditorComponent, TestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxQuillEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a code highlight', () => {
    expect(fixture.nativeElement.innerHTML).toContain('language-javascript');
  });
});
