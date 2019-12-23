import { Component, Input } from "@angular/core";

@Component({
    selector: 'editable',
    template: `
        <div contenteditable="true">
            <ng-content></ng-content>
        </div>
    `
})
export class EditableComponent {
}