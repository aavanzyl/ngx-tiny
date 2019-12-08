import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCodeHighlightComponent } from './year-picker.component';

@Component({
  template: `
    <ngx-code-highlight>
      <![CDATA[
        if (someCondition) { console.log('hello'); } else {
        console.log('chow'); }
    ]]>
    </ngx-code-highlight>
  `
})
class TestComponent { }

describe('NgxCodeHighlightComponent', () => {
  let component: NgxCodeHighlightComponent;
  let fixture: ComponentFixture<NgxCodeHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxCodeHighlightComponent, TestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCodeHighlightComponent);
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
