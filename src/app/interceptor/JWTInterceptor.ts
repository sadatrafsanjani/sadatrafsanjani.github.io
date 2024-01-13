import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.indexOf('login') !== -1 ) {

      return next.handle(request);
    }

    const accessToken = this.authenticationService.getAccessToken();

    if (accessToken != null) {

      request = this.addAccessToken(request, accessToken);

    }

    return next.handle(request);
  }

  private addAccessToken(request: HttpRequest<any>, token: string): any {

    return request.clone({
      setHeaders: {
        Authorization: `Heat ${token}`
      }
    });
  }
}

export const JWTProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi: true
  }
];
