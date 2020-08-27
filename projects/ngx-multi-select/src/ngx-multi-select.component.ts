import { state, style, trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MultiSelectOption, SearchBoxOption, MultiSelectConfiguration } from './ngx-multi-select.options';
import { Subject } from 'rxjs';

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
  public focusedItem = null;
  private clickedInside = false;

  @ViewChild('search') searchInput: ElementRef;
  public searchText = '';

  // tslint:disable-next-line:no-input-rename
  @Input('selected') _selected: MultiSelectOption[] | string[] = [];
  @Input() options: MultiSelectOption[] | string[] = [];
  @Input() placeholder = '';

  @Input() config: MultiSelectConfiguration = {
    searchPlaceholder: 'Search...',
    searchIconClass: 'default-icon',
    searchBox: SearchBoxOption.DYNAMIC,
    searchBoxDynamicLimit: 5,
    deliminator: ', ',
    placeholder: 'Select Option'
  };

  onKeyDownSubject: Subject<any> = new Subject<any>();

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
      }).join(this.config.deliminator);
    } else {
      _displayText = this.placeholder;
    }

    return _displayText;
  }

  get filteredOptions(): any {

    if (this.searchText === undefined
      || this.searchText === null
      || this.searchText.trim() === '') {

      return this.options;
    }

    return (this.options as any[]).filter((option) => {
      if (typeof option === 'string') {
        return option.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0;
      } else if (typeof option === 'object') {
        return option.value.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0;
      }
    });
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

  isSearchVisible() {
    switch (this.config.searchBox) {
      case SearchBoxOption.ALWAYS:
        return true;
      case SearchBoxOption.DYNAMIC:
        return this.options && this.options.length > this.config.searchBoxDynamicLimit;
      case SearchBoxOption.NEVER:
      default:
        return false;
    }
  }

  onFocusChange(item) {
    this.focusedItem = item;
  }

  // -------- Click Listeners --------
  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    if (event.key === 'Enter') {
      if (this.filteredOptions.length > 0) {
        this.selectOption(this.focusedItem);
        this.focusedItem = null;
      }
    } else {
      this.onKeyDownSubject.next(event);
    }
  }

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

    if (this.isOpen && this.isSearchVisible()) {
      setTimeout(() => {
        // this will make the execution after the above boolean has changed
        this.searchInput.nativeElement.focus();
      }, 0);
    }
  }
}
