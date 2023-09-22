import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { editDetailsResponseInterface, fetchUserResponseInterface, userProfileUpdateResponseInterface } from '../../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl


  getUserDetails(){

    return this.http.get<fetchUserResponseInterface>(`${this.baseUrl}/user/profile`)


  }

  uploadProfile(profileForm:FormData){
        
     return this.http.post<userProfileUpdateResponseInterface>(`${this.baseUrl}/user/upload-profile`,profileForm)

}


  editProfile(username:string,email:string){
    return this.http.post<editDetailsResponseInterface>(`${this.baseUrl}/user/edit-details`,{username:username,email:email})
  }
}
