import { state, style, trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MultiSelectOption } from './ngx-multi-select.options';

let instanceId = 0;

@Component({
  selector: 'ngx-multi-select',
  templateUrl: './ngx-multi-select.component.html',
  styleUrls: ['./ngx-multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMultiSelectComponent),
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
export class NgxMultiSelectComponent implements ControlValueAccessor {

  instanceId = `ngx-multi-select-${instanceId++}`;

  public isOpen = false;
  public isDisabled = false;
  private clickedInside = false;

  // tslint:disable-next-line:no-input-rename
  @Input('selected') _selected: MultiSelectOption[] | string[] = [];
  @Input() options: MultiSelectOption[] | string[] = [];
  @Input() placeholder = '';
  @Input() deliminator = ', ';

  // When not using forms
  @Output() valueChange: EventEmitter<MultiSelectOption[] | string[]> = new EventEmitter();

  get selected(): any[] {
    return this._selected;
  }

  set selected(val) {
    this._selected = val;
    this.onChange(val);
    this.onTouched();
    this.valueChange.emit(val);
  }

  onChange = (_value: MultiSelectOption[] | string[]) => { };
  onTouched = () => { };


  get displayText() {
    let _displayText: string;

    if (this.selected && this.selected.length > 0) {
      _displayText = this.selected.map(item => {
        if (typeof item === 'string') {
          return item;
        } else if (typeof item === 'object') {
          return item.value;
        }
      }).join(this.deliminator);
    } else {
      _displayText = this.placeholder;
    }

    return _displayText;
  }

  selectOption(option: any) {

    const _selected = this.selected || [];

    if (_selected && _selected.includes(option)) {
      const indexRemove = _selected.findIndex(x => x === option);
      _selected.splice(indexRemove, 1);
    } else {
      _selected.push(option);
    }

    this.selected = _selected;
  }

  isSelected(option: any) {
    return this.selected ? this.selected.includes(option) : false;
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

  writeValue(selected: MultiSelectOption[] | string[]): void {
    if (selected !== this.selected) {
      this.selected = selected;
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: (value: MultiSelectOption[] | string[]) => void): void {
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




