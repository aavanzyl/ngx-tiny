import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ngx-internal-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxMonthPickerComponent implements OnInit {

  @Input() currentMonth = 6;
  @Output() onMonthSelect: EventEmitter<number>;

  months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  ngOnInit() {
  }

  isActive(index) {
    return this.currentMonth && this.currentMonth === index;
  }

  selectMonth(index) {
    this.onMonthSelect.emit(index);
  }
}
