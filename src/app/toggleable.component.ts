import { Component, Input } from "@angular/core";

@Component({
    selector: 'toggleable',
    template: `
        <span [style.border]="border()" (click)="onClick()">
            <ng-content></ng-content>
        </span>
    `
})
export class ToggleableComponent {

    isClicked = false;

    border() {
        return this.isClicked ? '1px solid red' : '';
    }

    onClick() {
        this.isClicked = !this.isClicked;
    }

}