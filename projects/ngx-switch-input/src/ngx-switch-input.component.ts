import {
  forwardRef,
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let instanceId = 0;

@Component({
  selector: 'ngx-switch-input',
  templateUrl: './ngx-switch-input.component.html',
  styleUrls: ['./ngx-switch-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSwitchInputComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxSwitchInputComponent implements ControlValueAccessor {

  instanceId = `ngx-switch-input-${instanceId++}`;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
    this.valueChange.emit(val);
  }

  @Input() label;

  // tslint:disable-next-line:no-input-rename
  @Input('value') _value = false;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  onChange = (_value: boolean) => { };
  onTouched = () => { };

  registerOnChange(fn: (value: boolean) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: boolean) {
    if (value !== this.value) {
      this.value = value;
    }
  }

  switch() {
    this.value = !this.value;
  }
}
