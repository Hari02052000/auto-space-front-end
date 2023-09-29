import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AddproductResponseInterface, imageRemovedResponseInterface, imageuploadResponseInterface, postedproducttResponseInterface, singleproducttResponseInterface, updateProductResponseInterface } from '../../models/add-product';

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
  deleteImage(image:number,productId:string){

    return this.http.post<imageRemovedResponseInterface>(`${this.baseUrl}/user/products/delete-image`,{image:image,productId:productId})

  }

  uploadimages(imagesForm:FormData){
  
        return this.http.post<imageuploadResponseInterface>(`${this.baseUrl}/user/products/upload-new-images`,imagesForm)


  }

  updateProduct(  price:number, year:number,fuel:string,kmDriven:number,Location:string,
    no_of_owners:number,productid:string
  ){
  
    return this.http.post<updateProductResponseInterface>(`${this.baseUrl}/user/products/update-product`,{price,year,fuel,kmDriven,Location,no_of_owners,productid})


}




}


//uploaded:true,images:images