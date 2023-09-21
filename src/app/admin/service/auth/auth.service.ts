import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminLoginRequestInterface, adminLoginResponseInterface } from '../../interfaces/admin.auth.interface';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = `${environment.baseUrl}/admin`

  constructor(private http:HttpClient) { }

  login(admindetails:adminLoginRequestInterface) {    
    return this.http.post<adminLoginResponseInterface>(`${this.baseUrl}/login`,admindetails).pipe(
      tap((res:adminLoginResponseInterface)=>{
        if(res.access_token){
          const token = res.access_token
         localStorage.setItem('adminToken',token)
        }
         
      })
    )
  }

}
