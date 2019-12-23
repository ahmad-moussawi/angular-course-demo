import { Directive, HostBinding, Input } from "@angular/core";
import { FeatureService } from './feature.service';

@Directive({
    selector: '[feature]'
})
export class FeatureDirective {

    @Input() feature;

    @HostBinding() get disabled() {
        return !this.featureService.isAvailable(this.feature);
    }

    constructor(private featureService: FeatureService) {

    }

}