import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable, finalize, map } from 'rxjs';
import { brand, productInterface } from 'src/app/models/fetch.products.interface';
import { FetchProductServiceService } from 'src/app/service/fetch-product-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  products$: Observable<productInterface[]|undefined> | undefined;
  brands$: Observable<brand[]|undefined> | undefined;
  search:string|undefined
  filterOption:string|undefined
  sortBy:string|undefined
  isLoading:boolean = true


constructor( private fetchProductservice:FetchProductServiceService,private router:Router ){}

  ngOnInit(): void {

    const response$ = this.fetchProductservice.fetchProduct()

    response$
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
  
    this.brands$ = response$.pipe(map((res)=>res.brands))

    this.products$ = response$.pipe(map((res)=>res.products))

  }
  searchfunction(){

    this.products$ =  this.fetchProductservice.searchProduct(this.search,this.sortBy,this.filterOption).pipe(
      map(response => response.products)
    )

  }

  showDetails(id:string){

    this.router.navigate(['/single-product',id])

  }


    // fetch the brands and cars
  }





