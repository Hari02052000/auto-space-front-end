

import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { productInterface } from 'src/app/models/fetch.products.interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: productInterface[];

  constructor(private router:Router,private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getPostedProducts().subscribe((res)=>{

      if(res.products){
        this.products = res.products
      }
    })
  }

  markSold(id:string){
    
  }

}
