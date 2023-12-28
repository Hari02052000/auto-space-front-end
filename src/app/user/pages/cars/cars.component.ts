import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable, Subscription,  map, tap } from 'rxjs';
import { brand, productInterface } from 'src/app/models/fetch.products.interface';
import { FetchProductServiceService } from 'src/app/service/fetch-product-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit,OnDestroy {

  products$: Observable<productInterface[]|undefined> | undefined;
  brands$: Observable<brand[]|undefined> | undefined;
  search:string|undefined
  filterOption:string|undefined
  sortBy:string|undefined
  isLoading!: boolean;
  subscription!:Subscription

constructor( private fetchProductservice:FetchProductServiceService,private router:Router ){}

  ngOnInit(): void {

    this.isLoading = true
   
    const response$ = this.fetchProductservice.fetchProduct()

  
    this.brands$ = response$.pipe(map((res)=>res.brands))

    this.products$ = response$.pipe(map((res)=>res.products))
  this.subscription  =  response$.subscribe(
      (data) => {
        this.isLoading = false
      }
    )    


  }
  searchfunction(){

    this.isLoading = true

    this.products$ =  this.fetchProductservice.searchProduct(this.search,this.sortBy,this.filterOption).pipe(
      tap(()=>{
        this.isLoading = false
      }),
      map(response => response.products)
    )

  }
  getFirstImageURL(product:productInterface):string|undefined{
    return product.images && product.images[0] ? product.images[0].URL : undefined;


  }

  showDetails(id:string){

    this.router.navigate(['/single-product',id])

  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }


  }





