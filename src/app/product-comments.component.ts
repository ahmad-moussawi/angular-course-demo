import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `ProductComments Component`
})
export class ProductCommentsComponent {

    constructor(route: ActivatedRoute) {

        route.paramMap.subscribe(params => {
            console.log('comments for ' + params.get('postid'));
        });

    }

}