import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavigationComponent } from './sub-navigation.component';

describe('SubNavigationComponent', () => {
    let component: SubNavigationComponent;
    let fixture: ComponentFixture<SubNavigationComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [SubNavigationComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SubNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
