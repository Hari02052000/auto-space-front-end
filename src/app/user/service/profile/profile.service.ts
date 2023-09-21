import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { fetchUserResponseInterface } from '../../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl


  getUserDetails(){

    return this.http.get<fetchUserResponseInterface>(`${this.baseUrl}/user/profile`)


  }

  editProfile(){}
  editDetails(){}
}
