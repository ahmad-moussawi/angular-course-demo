import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[editable]'
})
export class EditableDirective {

    @HostBinding('attr.contenteditable') contentEditable = true;

}