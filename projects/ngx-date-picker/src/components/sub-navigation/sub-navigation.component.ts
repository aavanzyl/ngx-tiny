import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationItem } from '../../models/datepicker.model';

@Component({
    selector: 'ngx-internal-sub-navigation',
    templateUrl: './sub-navigation.component.html',
    styleUrls: ['./sub-navigation.component.scss']
})
export class SubNavigationComponent {

    @Output() closed: EventEmitter<null> = new EventEmitter();
    @Output() subNavigationClick: EventEmitter<Date> = new EventEmitter();
    @Input() public navigationItems: NavigationItem[];

    onItemCLick(navigationItem: NavigationItem) {
        const date = new Date(navigationItem.year, navigationItem.month);
        this.closed.emit();
        this.subNavigationClick.emit(date);
    }
}
