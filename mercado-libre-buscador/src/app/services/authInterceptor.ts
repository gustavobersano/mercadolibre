import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //const baseUrl = environment.api;
        const baseUrl = 'https://api.mercadolibre.com/';
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            'Access-Control-Allow-Credentials': 'true'
        });
        const authReq = req.clone({
            url: !req.url.endsWith('.json') ? `${baseUrl}/${req.url}` : req.url,
            headers: headers
        });
        return next.handle(authReq)
            .pipe(catchError((error: any) => {
                return throwError(error.error || 'Server error');
            })
            );
    }
}