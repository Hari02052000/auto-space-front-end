import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor( private http:HttpClient ) { }

  baseUrl = `${environment.baseUrl}/admin`


  getchart(){
   return this.http.get(`${this.baseUrl}/get-chart`)
  }

}
