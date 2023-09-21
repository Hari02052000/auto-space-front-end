import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInterface } from 'src/app/models/fetch.products.interface';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private productService:ProductService ){}

  product:productInterface|undefined 


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    if(id){

      this.productService.singleProduct(id).subscribe((res)=>{

        if(res.product){
          this.product = res.product
        }
      })
    }
    // this.route.params.subscribe(params => {
    //   const id:string = params['id'];
         
    //    this.store.pipe(select(products)).subscribe((products)=>{
    //    this.product = products?.find(product=>product._id == id)
    //   })
    // }
    // ) 
    // console.log(this.product)
   }

   chat(recevierid:string,productid:string){
   
    this.router.navigate(['chat-owner',recevierid,productid]);

   }

   currentImageIndex = 0;

   changeimage(index:number){

    this.currentImageIndex = index;


   }
 

   
   ngOnDestroy(): void {
     
   }
}




