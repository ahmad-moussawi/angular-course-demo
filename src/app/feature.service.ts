import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FeatureService {

    features = {
        admin: false,
        accounting: true,
        users: true,
    }

    disableAll = false;

    constructor() {
        setInterval(() => {
            this.disableAll = !this.disableAll;
        }, 2000);
    }

    isAvailable(feature: string) {

        if (this.disableAll) {
            return false;
        }

        if (!feature) return false;

        return this.features[feature];
    }

}