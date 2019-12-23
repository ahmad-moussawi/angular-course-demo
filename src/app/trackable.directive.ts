import { Directive, HostBinding, HostListener, Input, ElementRef } from "@angular/core";
import { TrackableService } from './trackable.service';

@Directive({
    selector: '[trackable]',
})
export class TrackableDirective {

    @Input() trackable;

    @HostListener('click') onClick() {

        this.trackableService.track(
            this.trackable || this.el.nativeElement.innerHTML
        );

    }

    constructor(private el: ElementRef, private trackableService: TrackableService) {

    }

}