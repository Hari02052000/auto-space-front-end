import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AddproductResponseInterface, postedproducttResponseInterface, singleproducttResponseInterface } from '../../models/add-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { }
  baseUrl = environment.baseUrl

  addProduct(producForm:FormData){
        
      return this.http.post<AddproductResponseInterface>(`${this.baseUrl}/user/products/add-product`,producForm)

  }

  singleProduct(id:string){

    return this.http.get<singleproducttResponseInterface>(`${this.baseUrl}/user/products/single-product/${id}`)

  }
  getPostedProducts(){

    return this.http.get<postedproducttResponseInterface>(`${this.baseUrl}/user/products/posted-products`)

  }

  getEditProductDetails(id:string){

    return this.http.get<singleproducttResponseInterface>(`${this.baseUrl}/user/products/edit-product/${id}`)

  }


}
