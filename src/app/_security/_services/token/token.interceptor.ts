import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is autenticated for repo
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (this.tokenService.token && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.tokenService.token}`
                }
            });
        }

        return next.handle(request);
    }
}