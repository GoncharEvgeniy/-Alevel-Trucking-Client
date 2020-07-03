import {Injectable, Injector} from '@angular/core';
import {HttpRequest, HttpHandler, HttpInterceptor} from '@angular/common/http';

import {LoginService} from './loginService';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let loginService = this.injector.get(LoginService);
    const token = loginService.getToken();
    if (token != null) {
      let tokenizedReq = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + loginService.getToken()
        }
      });
      return next.handle(tokenizedReq);
    } else {
      return next.handle(request);
    }
  }

}
