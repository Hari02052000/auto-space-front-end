import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { fetchBrandResponseInterface } from '../../interfaces/admin.product.interface';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }

  baseUrl = `${environment.baseUrl}/admin`


  // addbrand(brandName:string){
  //   return this.http.post<addBrandResponseInterface>(`${this.baseUrl}/brand/add-brand`,{brandName:brandName})
  //  }
  //  addModel(modelName:string,brandId:string){
  //    console.log(modelName,brandId)
  //    return this.http.post<addModelResponseInterface>(`${this.baseUrl}/brand/add-model`,{modelName:modelName,brandId:brandId})
  //   }
  //   addOption(optionName:string,brandId:string,modelId:string){
  //    return this.http.post<addModelResponseInterface>(`${this.baseUrl}/brand/add-option`,{optionName:optionName,brandId:brandId,modelId:modelId})
  //   }
  
 
   getbrands(){
     return this.http.get<fetchBrandResponseInterface>(`${this.baseUrl}/brand/get-brands`)
   }
 


}
