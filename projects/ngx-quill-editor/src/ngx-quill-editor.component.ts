import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  forwardRef,
  Inject,
  SimpleChanges,
  OnChanges,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { NgxQuillEditorService } from './ngx-quill-editor.service';

declare var Quill: any;

@Component({
  selector: 'ngx-quill-editor',
  templateUrl: './ngx-quill-editor.component.html',
  styleUrls: ['./ngx-quill-editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgxQuillEditorComponent),
    multi: true
  }],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NgxQuillEditorComponent implements OnInit, OnChanges, ControlValueAccessor {

  quillEditor: any;
  editorElem: HTMLElement;
  _options: object;

  defaultModules = {
    toolbar: [
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      ['blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['clean'],
      ['link']
    ]
  };

  @Input() options: object;
  @Input() content: any;

  @Output() blurred: EventEmitter<any> = new EventEmitter();
  @Output() focused: EventEmitter<any> = new EventEmitter();
  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Output() changed: EventEmitter<any> = new EventEmitter();

  onModelChange: any = () => { };
  onModelTouched: any = () => { };

  constructor(
    private elementRef: ElementRef,
    private readonly svc: NgxQuillEditorService,
    @Inject(DOCUMENT) private readonly document: any
  ) { }

  ngOnInit() {

    this._options = Object.assign({
      modules: this.defaultModules,
      placeholder: 'Insert text here ...',
      readOnly: false,
      theme: 'snow',
      boundary: document.body
    }, this.options || {});


    this.svc.lazyLoadQuill(this._options).subscribe(_ => {
      if (!Quill) {
        Quill = this.document.defaultView.Quill;
      }
      this.initQuill();
    });
  }

  initQuill() {
    this.editorElem = this.elementRef.nativeElement.children[0];

    this.quillEditor = new Quill(this.editorElem, this._options);

    if (this.content) {
      this.quillEditor.pasteHTML(this.content);
    }

    this.ready.emit(this.quillEditor);

    // mark model as touched if editor lost focus
    this.quillEditor.on('selection-change', (range: any) => {
      if (!range) {
        this.onModelTouched();
        this.blurred.emit(this.quillEditor);
      } else {
        this.focused.emit(this.quillEditor);
      }
    });

    // update model if text changes
    this.quillEditor.on('text-change', (delta: any, oldDelta: any, source: any) => {
      let _html = this.editorElem.children[0].innerHTML;
      const _text = this.quillEditor.getText();

      if (_html === '<p><br></p>') { _html = null; }

      this.onModelChange(_html);

      this.changed.emit({
        editor: this.quillEditor,
        html: _html,
        text: _text
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['readOnly'] && this.quillEditor) {
      this.quillEditor.enable(!changes['readOnly'].currentValue);
    }
  }

  writeValue(currentValue: any) {
    this.content = currentValue;

    if (this.quillEditor) {
      if (currentValue) {
        this.quillEditor.pasteHTML(currentValue);
        return;
      }
      this.quillEditor.setText('');
    }
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }
}
