import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private auth: AuthService) { }

  intercept(req, next) {
    const tokenReq = req.clone({
      setHeaders: {
        Authorizations: 'Bearer ' + this.auth.obtenerToken()
      }
    });
    return next.handle(tokenReq);
  }
}
