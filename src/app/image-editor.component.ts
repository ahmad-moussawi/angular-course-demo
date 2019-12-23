import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'image-editor',
    template: `

    <button (click)="rotate('left')">Left</button>
    <img [src]="imageUrl" [style]="rotationCss" />
    <button (click)="rotate('right')">Right</button>

    <p>Current Rotation: {{ rotation | rotation:'d' }}</p>

    `
})
export class ImageEditorComponent {

    date = new Date();

    @Input() imageUrl;
    @Output('rotate') rotateEmitter = new EventEmitter();
    rotation = 0;

    get rotationCss() {
        return this.domSanitizer.bypassSecurityTrustStyle(`transform: rotate(${this.rotation}deg)`);
    }

    rotate(direction: string) {
        if (direction === 'right') {
            this.rotation += 90;
        } else {
            this.rotation -= 90;
        }

        this.rotateEmitter.emit(`rotated with ${this.rotation}deg`);
    }

    constructor(private domSanitizer: DomSanitizer) {
    }

}