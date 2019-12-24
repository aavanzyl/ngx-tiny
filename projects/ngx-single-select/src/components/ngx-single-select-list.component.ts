
import { Component, AfterContentInit, ContentChildren, QueryList, HostListener, Input, OnDestroy, HostBinding } from '@angular/core';
import { NgxSingleSelectListItemComponent } from './ngx-single-select-list-item.component';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'ngx-single-select-list',
    template: '<ng-content></ng-content>',
})
export class NgxSingleSelectListComponent implements AfterContentInit, OnDestroy {


    @HostBinding('attr.role') role = 'list';

    onKeyDownSubscription: Subscription;

    @Input() onKeyDown: Observable<any>;
    @ContentChildren(NgxSingleSelectListItemComponent) items: QueryList<NgxSingleSelectListItemComponent>;
    private keyManager: FocusKeyManager<NgxSingleSelectListItemComponent>;


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
