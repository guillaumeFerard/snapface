import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../app/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //   const headers = new HttpHeaders()
    //     .append('Authorization', `Bearer ${this.authService.getToken()}`);
    //   const modifiedReq = req.clone({ headers });
      const modifiedReq = req.clone({ setHeaders: {Authorization : `Bearer ${this.authService.getToken()}`}});
      return next.handle(modifiedReq);
    }   
}