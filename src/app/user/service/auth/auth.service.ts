import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { chatResponseInterface } from 'src/app/models/fetch.chat.interface';
import { UserMessagesResponseInterface } from 'src/app/models/fetch.message';
import { userLoginRequestInterface, userLoginResponseInterface, userRegisterRequestInterface, userRegisterResponseInterface } from 'src/app/models/user.interfaces';
import { environment } from 'src/environments/environment.development';
import { changePasswordResponseInterface, emailVerificationResponseInterface, otpVerificationResponseInterface } from '../../models/otp-verification';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
     baseUrl = environment.baseUrl


  login(userdetails:any) {    
    return this.http.post<userLoginResponseInterface>(`${this.baseUrl}/user/login`,userdetails).pipe(
      tap((res:userLoginResponseInterface)=>{
        if(res.access_token){
          const token = res.access_token
         localStorage.setItem('userToken',token)
        }
         
      })
    )
  }
  register(userdetails:userRegisterRequestInterface){
    return this.http.post<userRegisterResponseInterface>(`${this.baseUrl}/user/register`, userdetails).pipe(
      tap((res:userRegisterResponseInterface)=>{
        if(res.access_token){
          const token = res.access_token
         localStorage.setItem('userToken',token)
        }
         
      })
    )

  }

  veryfyOtp(otp:number,email:string){

    return this.http.post<otpVerificationResponseInterface>(`${this.baseUrl}/user/verify-otp`,{email:email,otp:otp})

  }
  getMessage(reciverId:string,productId:string){

    return this.http.get<UserMessagesResponseInterface>(`${this.baseUrl}/user/get-messages?receverId=${reciverId}&productId=${productId}`)

  }
  
  getAllChats(){
    return this.http.get<chatResponseInterface>(`${this.baseUrl}/user/chat/get-chat`)
  }

  verifyEmail(email:FormData){

    return this.http.post<emailVerificationResponseInterface>(`${this.baseUrl}/user/verify-email`,email)

    
  }

  changePassword(email:string,password:string,confpassword:string){

    return this.http.post<changePasswordResponseInterface>(`${this.baseUrl}/user/change-password`,{email:email,password:password,confpassword:confpassword})

    
  }



}
