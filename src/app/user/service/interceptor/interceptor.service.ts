import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    let tokenizedReq = req.clone({
      setHeaders:{
        userToken:`Bearer ${localStorage.getItem('userToken')}`
      }
    })
    return next.handle(tokenizedReq)

  }



}
