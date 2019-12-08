import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter,
  AfterViewChecked,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ngx-internal-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxYearPickerComponent implements OnInit, AfterViewInit {

  _rowHeight = 40;

  _years: number[] = [];

  @Input() currentYear: number;
  @Input() yearRangeStart: number;
  @Input() yearRangeEnd: number;

  @Output() onYearSelect: EventEmitter<number>;

  @ViewChild('scrollPane', { static: true }) public scrollPane: ElementRef;

  get index() {
    return this._years && this.currentYear ? this._years.indexOf(this.currentYear) : 0;
  }

  get years() {
    this._years = [];
    for (let i = this.yearRangeStart; i < this.yearRangeEnd; i++) {
      this._years.push(i);
    }

    return this._years;
  }

  ngOnInit(): void {
    let _now = new Date();

    this.currentYear = this.currentYear || _now.getFullYear();
    this.yearRangeStart = this.yearRangeStart || (this.currentYear - 100);
    this.yearRangeEnd = this.yearRangeEnd || (this.currentYear + 50);
  }

  isActive(index) {
    return this.currentYear && this._years && this.currentYear === this._years[index];
  }

  selectYear(index) {
    this.onYearSelect.emit(index);
  }

  ngAfterViewInit(): void {
    let _expectedAt = (this.index / 3) * this._rowHeight;
    this.scrollPane.nativeElement.scrollTo(0, _expectedAt - 20);
  }
}
