import { Component,AfterViewInit,OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInterface } from 'src/app/models/fetch.products.interface';
import { TosterService } from 'src/app/service/toster/toster.service';
import { ProductService } from '../../service/product/product.service';

declare var $: any; 


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product!:productInterface
  constructor(private router:Router,private tost:TosterService, private productservice:ProductService,private activeRoute:ActivatedRoute){}
 
 
  ngOnInit(): void {

    const id = this.activeRoute.snapshot.params['id']


    this.productservice.getEditProductDetails(id).subscribe((res)=>{
      if(res.product){
        this.product = res.product
      }
    })
    
  }




}
