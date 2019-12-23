import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'rotation',
})
export class RotationPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {

        const unit = args[0] || 'deg';

        if (!value) return `no rotation`;

        return `${value}${unit}`;

    }

}