import { state, style, trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SingleSelectOption } from './ngx-single-select.options';

let instanceId = 0;

@Component({
  selector: 'ngx-single-select',
  templateUrl: './ngx-single-select.component.html',
  styleUrls: ['./ngx-single-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSingleSelectComponent),
      multi: true
    },
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openDropdown', [
      state(
        'open',
        style({
          height: 'auto'
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          display: 'none'
        })
      ),
    ])
  ]
})
export class NgxSingleSelectComponent implements ControlValueAccessor {

  instanceId = `ngx-single-select-${instanceId++}`;

  public isOpen = false;
  public isDisabled = false;
  private clickedInside = false;

  // tslint:disable-next-line:no-input-rename
  @Input('selected') _selected: SingleSelectOption | string = null;
  @Input() options: SingleSelectOption[] | string[] = [];
  @Input() placeholder = '';

  // When not using forms
  @Output() valueChange: EventEmitter<SingleSelectOption | string> = new EventEmitter();

  get selected(): any {
    return this._selected;
  }

  set selected(val) {
    this._selected = val;
    this.onChange(val);
    this.onTouched();
    this.valueChange.emit(val);
  }

  onChange = (_value: SingleSelectOption | string) => { };
  onTouched = () => { };


  get displayText() {
    let _displayText: string;

    if (this.selected && this.selected.length > 0) {
      _displayText = this.selected;

      if (typeof this.selected === 'object') {
        _displayText = this.selected.value;
      }

    } else {
      _displayText = this.placeholder;
    }

    return _displayText;
  }

  selectOption(option: any) {
    this.selected = option;
    this.isOpen = false;
  }

  isSelected(option: any) {
    return this.selected ? this.selected === option : false;
  }

  getId(option: any) {
    if (typeof option === 'string') {
      return option;
    } else if (typeof option === 'object') {
      return option.id || option.value;
    }
  }

  getValue(option: any) {
    if (typeof option === 'string') {
      return option;
    } else if (typeof option === 'object') {
      return option.value;
    }
  }

  writeValue(selected: SingleSelectOption | string): void {
    if (selected !== this.selected) {
      this.selected = selected;
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: (value: SingleSelectOption | string) => void): void {
    this.onChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // -------- Click Listeners --------


  @HostListener('click')
  clickInsideComponent() {
    this.clickedInside = true;
  }

  @HostListener('document:click')
  clickOutsideComponent() {
    if (!this.clickedInside) {
      this.isOpen = false;
    }
    this.clickedInside = false;
  }

  toggleButtonDropDown() {
    if (this.isDisabled) {
      this.isOpen = false;
    }
    this.isOpen = !this.isOpen;
  }

}




