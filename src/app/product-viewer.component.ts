import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, take, switchMap, filter } from 'rxjs/operators';

@Component({
    template: `

    <pre>{{ item | json }}</pre>

    `
})
export class ProductViewerComponent {

    item;

    constructor(route: ActivatedRoute, private http: HttpClient) {

        // route.paramMap.subscribe(params => {

        //     this.find(+params.get('postid')).subscribe(value => {
        //         this.item = value;
        //     });

        // });

        route.paramMap.pipe(
            take(5),
            map(params => +params.get('postid')),
            filter(x => x !== undefined),
            switchMap(postid => this.find(postid)),
        ).subscribe(item => {
            this.item = item;
        })

    }


    get() {
        return this.http.get('/assets/photos.json');
    }

    find(id) {

        // return this.get().toPromise().then(
        //     (photos: any[]) => photos.find(x => x.id === id)
        // )

        return this.get().pipe(
            map((photos: any[]) => {
                return photos.find(x => x.id === id)
            }),
        )
    }

}