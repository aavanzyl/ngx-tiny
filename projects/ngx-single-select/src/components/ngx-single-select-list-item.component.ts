import { FocusableOption } from '@angular/cdk/a11y';
import { Component, Input, ElementRef, Output, EventEmitter, HostBinding } from '@angular/core';
import { SingleSelectOption } from '../ngx-single-select.options';

@Component({
    selector: 'ngx-single-select-list-item',
    template: '<div>{{ getLabel() }}</div>',
})
export class NgxSingleSelectListItemComponent implements FocusableOption {

    @HostBinding('attr.role') role = 'list-item';
    @HostBinding('attr.tabindex') tabindex = -1;

    @Input() option: SingleSelectOption | string;

    tabIndex = -1;
    disabled: boolean;

    @Output() focusChange = new EventEmitter<SingleSelectOption | string>();

    constructor(private element: ElementRef) {
    }

    getLabel(): string {
        if (typeof this.option === 'string') {
            return this.option;
        } else if (typeof this.option === 'object') {
            return this.option.value;
        }
    }

    focus() {
        this.element.nativeElement.focus();
        this.focusChange.emit(this.option);
    }
}
