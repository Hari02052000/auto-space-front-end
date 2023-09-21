import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import {  productResponseInterface } from '../models/fetch.products.interface';
import { FetchBrandResponseInterface } from '../models/fetch.brand.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FetchProductServiceService {

   baseUrl = environment.baseUrl

  constructor(private http:HttpClient){

    
  }

  

  fetchProduct(){
    return this.http.get<productResponseInterface>(`${this.baseUrl}/user/products/get-products`)
  }

  fetchBrand(){
    return this.http.get<FetchBrandResponseInterface>(`${this.baseUrl}/user/products/get-brands`)
  }
  haveToken(){
    return !! localStorage.getItem('userToken')

  }



}
