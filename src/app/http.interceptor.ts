import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MyHttpLogger implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({
            headers: req.headers.set('X-App-Language', 'en'),
            params: req.params.set('device-id', '33'),
        });

        return next.handle(req).pipe(map(event => {

            if (event instanceof HttpResponse) {
                return event.clone({
                    body: [
                        {
                            id: 0,
                            title: 1,
                        },
                        ...(event.body as any[])
                    ]
                })
            }

            return event;
        }));



    }

}