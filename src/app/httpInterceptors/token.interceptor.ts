import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { catchError, switchMap, finalize, filter, take } from 'rxjs/operators';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthHeaderInterceptor implements HttpInterceptor {
    isTokenRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    refreshAttemptCount = 0;
    constructor(private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        request = this.addAuthHeader(request);
        return next.handle(request).pipe(
            catchError((error: HttpResponse<any>) => {
                return throwError(error);
            })
        );
    }

    addAuthHeader(request: HttpRequest<any>) {
        const token = localStorage.getItem('accountKey');
        const accountType = localStorage.getItem('accountType');
        //const token = "test";
        if (token && accountType) {
            var headers = {
                "account": token,
                "account-type":accountType 
            }
            request = request.clone({
                setHeaders: headers
            });
        }
        return request;
    }
}
