import { FocusableOption } from '@angular/cdk/a11y';
import { Component, Input, ElementRef, Output, EventEmitter, HostBinding } from '@angular/core';
import { MultiSelectOption } from '../ngx-multi-select.options';

@Component({
    selector: 'ngx-multi-select-list-item',
    template: `
    <input type="checkbox" tabindex="-1" [name]="getId(option)" [value]="getValue(option)"  [checked]="checked" />
    <div>{{getValue(option)}}</div>
  `,
})
export class NgxMultiSelectListItemComponent implements FocusableOption {

    @HostBinding('attr.role') role = 'list-item';
    @HostBinding('attr.tabindex') tabindex = -1;

    tabIndex = -1;
    disabled: boolean;

    @Input() option: MultiSelectOption | string;
    @Input() checked: boolean;
    @Output() focusChange = new EventEmitter<MultiSelectOption | string>();

    constructor(private element: ElementRef) {
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

    focus() {
        this.element.nativeElement.focus();
        this.focusChange.emit(this.option);
    }
}
