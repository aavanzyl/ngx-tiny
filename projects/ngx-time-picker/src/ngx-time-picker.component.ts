import {
  Component,
  ViewEncapsulation,
  forwardRef,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TimePickerOptions } from './ngx-time-picker.options';

import {
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  setYear,
  eachDayOfInterval,
  getDate,
  getMonth,
  getYear,
  isToday,
  isSameMonth,
  format,
  getDay,
  subDays,
  setDay,
  isAfter, isBefore, addDays, setMonth,
  addHours,
  addMinutes,
  setHours
} from 'date-fns';

@Component({
  selector: 'ngx-time-picker',
  templateUrl: './ngx-time-picker.component.html',
  styleUrls: ['./ngx-time-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxTimePickerComponent),
      multi: true
    }
  ]
})
export class NgxTimePickerComponent implements OnInit, ControlValueAccessor {


  @ViewChild('container', { static: false }) containerElement: ElementRef;

  isOpened = true;
  disabled = false;
  private _options: TimePickerOptions = {}; // Computed options after input

  @Input()
  set options(input: TimePickerOptions) {
    this._options = input;
  }

  get options(): TimePickerOptions {
    const _defaults: TimePickerOptions = {
      hoursStep: 1,
      minutesStep: 1,
      military: false,
      displayFormat: 'HH:mm',
      locale: {}
    };
    return Object.assign(_defaults, this._options);
  }


  @Output() valueChange: EventEmitter<Date> = new EventEmitter();

  private _value = new Date();

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val || new Date();
    this.resetSeconds();
    this.onChange(this._value);
    this.onTouched();
    this.valueChange.emit(this._value);
  }

  constructor() {
    this.resetSeconds();
  }

  ngOnInit() {

  }

  onChange = (_value: Date) => { };
  onTouched = () => { };

  registerOnChange(fn: (value: Date) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: Date) {
    if (value) {
      this.value = value;
    }
  }

  nextHours() {
    this.setHours(+this.options.hoursStep);
  }

  prevHours() {
    this.setHours(-this.options.hoursStep);
  }

  nextMinutes() {
    this.setMinutes(+this.options.minutesStep);
  }

  prevMinutes() {
    this.setMinutes(-this.options.minutesStep);
  }

  setHours(h: number) {
    this.value = addHours(this.value, h);
  }

  setMinutes(m: number) {
    this.value = addMinutes(this.value, m);
  }

  setAmPm() {

    let hours = this.value.getHours();

    if (hours > 12) {
      hours -= 12;
    } else {
      hours += 12;
    }

    this.value = setHours(this.value, hours);
  }

  resetSeconds() {
    if (this._value) {
      this._value.setSeconds(0);
      this._value.setMilliseconds(0);
    }
  }

  public formatDisplay(): string {
    if (!this._value) {
      return '';
    }

    return format(this._value, this.options.displayFormat, this.options.locale);
  }

  toggle(): void {
    this.isOpened = !this.isOpened;
  }

  close(): void {
    this.isOpened = false;
  }
}
