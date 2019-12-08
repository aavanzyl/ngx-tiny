import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {
    private static getScrollOffset() {

        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            const x = window.pageXOffset || document.documentElement.scrollLeft;
            const y = window.pageYOffset || document.documentElement.scrollTop;
            return { x, y };
        }

        return { x: 0, y: 0 };
    }

    static getPageOffset(el: HTMLElement) {
        const scrollOffset = UtilitiesService.getScrollOffset();
        const width = el.offsetWidth;
        const height = el.offsetHeight;

        if (el.getBoundingClientRect) {
            const props = el.getBoundingClientRect();
            const position = {
                top: props.top + scrollOffset.y,
                left: props.left + scrollOffset.x,
                right: props.left + scrollOffset.x + width,
                bottom: props.top + scrollOffset.y + height,
                forRight: window.innerWidth - props.left,
                forBottom: window.innerHeight - (props.top + scrollOffset.y)
            };

            return position;
        }
    }

    createArray(start: number, end: number): number[] {
        return new Array(end - start + 1).fill(1).map((_, idx) => start + idx);
    }
}
