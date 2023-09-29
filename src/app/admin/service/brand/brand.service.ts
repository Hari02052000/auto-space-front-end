import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { addBrandResponseInterface, addModelResponseInterface, addOptionResponseInterface, editBrandResponseInterface, fetchBrandResponseInterface } from '../../interfaces/admin.product.interface';

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

   addbrand(brandName:FormData){
    return this.http.post<addBrandResponseInterface>(`${this.baseUrl}/brand/add-brand`,brandName)
   }
   addModel(modelName:string,brandId:string){
     console.log(modelName,brandId)
     return this.http.post<addModelResponseInterface>(`${this.baseUrl}/brand/add-model`,{modelName:modelName,brandId:brandId})
    }
    addOption(optionName:string,brandId:string,modelId:string){
     return this.http.post<addOptionResponseInterface>(`${this.baseUrl}/brand/add-option`,{optionName:optionName,brandId:brandId,modelId:modelId})
    }

    editbrand(brandName:string,id:string){
      return this.http.post<editBrandResponseInterface>(`${this.baseUrl}/brand/edit-brand`,{brandName:brandName,id:id})
     }
  
 
 


}
