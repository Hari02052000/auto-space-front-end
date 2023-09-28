import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { FetchUserResponseInterface, userBlockUnBlockResponseInterface } from '../../interfaces/admin.user.mangement.Interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient ) { }

  baseUrl = `${environment.baseUrl}/admin`

  getUsers(){
    return this.http.get<FetchUserResponseInterface>(`${this.baseUrl}/users/get-users`)
  }

  blockUser(id:string){
    return this.http.put<userBlockUnBlockResponseInterface>(`${this.baseUrl}/users/block-user`,{id:id})

  }
  UnblockUser(id:string){
    return this.http.put<userBlockUnBlockResponseInterface>(`${this.baseUrl}/users/unblock-user`,{id:id})
  }



}
