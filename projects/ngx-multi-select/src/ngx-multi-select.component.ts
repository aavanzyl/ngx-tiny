import { state, style, trigger } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

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
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NgxMultiSelectComponent),
      multi: true
    }
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

  public isOpen = false;
  public clickedInside = false;
  public selectedOptions: any[];

  @Input() placeholder = '';
  @Input() options: any[];

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();

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

  get displayText() {
    let _displayText = "";

    this.selectedOptions = this.options ? this.options.filter(item => item.selected) : null;

    if (this.selectedOptions && this.selectedOptions.length > 0) {
      _displayText = this.selectedOptions.map(item => item.value).join(', ');
    } else {
      _displayText = this.placeholder;
    }

    return _displayText;
  }

  constructor() { }

  ngOnInit() {
    this.selectedOptions = this.selectedOptions || [];
    this.options = this.options || [];
  }

  toggleButtonDropDown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    if (this.selectedOptions.includes(option)) {
      const indexRemove = this.selectedOptions.findIndex(x => x === option);
      this.selectedOptions.splice(indexRemove, 1);
      option['selected'] = false;
    } else {
      this.selectedOptions.push(option);
      option['selected'] = true;
    }

    this.valueChange.emit(this.selectedOptions);
  }

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }

  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

}
