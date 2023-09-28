import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { adminFetchProductResponseInterface, productListUnlistResponseInterface } from '../../interfaces/admin.product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient ) { }

  baseUrl = `${environment.baseUrl}/admin`

  getProducts(){
    return this.http.get<adminFetchProductResponseInterface>(`${this.baseUrl}/products/get-product`)
  }

  listProduct(id:string){
    return this.http.put<productListUnlistResponseInterface>(`${this.baseUrl}/products/list-product`,{id:id})

  }
  UnlistProduct(id:string){
    return this.http.put<productListUnlistResponseInterface>(`${this.baseUrl}/products/unlist-product`,{id:id})
  }



}
