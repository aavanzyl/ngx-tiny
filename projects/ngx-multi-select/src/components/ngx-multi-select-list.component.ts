
import { Component, AfterContentInit, ContentChildren, QueryList, HostListener, Input, OnDestroy, HostBinding } from '@angular/core';
import { NgxMultiSelectListItemComponent } from './ngx-multi-select-list-item.component';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'ngx-multi-select-list',
    template: '<ng-content></ng-content>',
})
export class NgxMultiSelectListComponent implements AfterContentInit, OnDestroy {

    onKeyDownSubscription: Subscription;

    @HostBinding('attr.role') role = 'list';

    @Input() onKeyDown: Observable<any>;
    @ContentChildren(NgxMultiSelectListItemComponent) items: QueryList<NgxMultiSelectListItemComponent>;
    private keyManager: FocusKeyManager<NgxMultiSelectListItemComponent>;

    ngAfterContentInit() {
        this.keyManager = new FocusKeyManager(this.items).withWrap();
        this.onKeyDownSubscription = this.onKeyDown.subscribe(event => {
            this.keyManager.onKeydown(event);
        });
    }

    ngOnDestroy() {
        if (this.onKeyDownSubscription) {
            this.onKeyDownSubscription.unsubscribe();
        }
    }
}
