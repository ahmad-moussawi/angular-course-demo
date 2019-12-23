import { Component } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, switchMap, startWith, filter, take, debounceTime, distinctUntilChanged, distinct, retry, retryWhen, catchError } from 'rxjs/operators';
import { Subject, interval, combineLatest, zip, of, Observable } from 'rxjs';

@Component({
    template: `

    <input type="search" id="search" autocomplete="off" (input)="keyUp$.next($event.target.value)" />

    <div *ngFor="let row of items">
        <span>{{ row.id }}</span>
        <span>{{ row.title }}</span>
    </div>

    `
})
export class ProductsComponent {

    items: any[] = [];

    keyUp$ = new Subject<string>();

    constructor(private http: HttpClient) {

        this.get().subscribe(response => {
            this.items = response.body;
        });


        // var search$ = this.keyUp$.pipe(
        //     startWith(null),
        //     filter(q => q === null || q === '' || q.length > 2),
        //     debounceTime(500),
        //     distinctUntilChanged(),
        //     switchMap(q => this.get(q)),
        // ).subscribe(items => {
        //     this.items = items;
        // });

    }


    getFail() {
        return this.http.get('/assets/wrongurl.json')
            .pipe(
                // retry(3),
                catchError(err => {
                    return of([]);
                })
            );
    }


    get(search = null): Observable<HttpResponse<any>> {
        return this.http.get('/assets/photos.json?search=' + search,
            {
                observe: 'response'
            });
        /*
        .pipe(
            map((list: any[]) => {
                if (!search) {
                    return list;
                }

                search = search.toLowerCase();

                return list.filter(
                    x => x.title.toLowerCase().includes(search)
                );

            })
        );
        */
    }



}