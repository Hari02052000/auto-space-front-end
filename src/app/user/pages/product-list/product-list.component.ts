

import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { productInterface } from 'src/app/models/fetch.products.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: productInterface[];
  isLoading:boolean =true

  constructor(private router:Router,private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getPostedProducts().subscribe((res)=>{

      if(res.products){
        this.products = res.products
        this.isLoading = false
      }
    })
  }

  async markSold(id:string,brand:string,model:string,option:string){

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `did you sold ${brand} ${model} ${option}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, i sold',
      cancelButtonText:'No,i didnt sold'
    })
    if (result.isConfirmed) {

      this.isLoading = true
      this.productService.markAsSold(id).subscribe((res)=>{
        if(res.marked){
          const soldproduct = this.products.find((product)=>product._id === id)
          if(soldproduct)
          soldproduct.isSold = true
          this.isLoading = false
        }
      })

    }


    
  }

}
