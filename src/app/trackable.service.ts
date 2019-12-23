import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TrackableService {

    track(value) {
        console.log('track: ' + value);
    }

}