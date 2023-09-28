import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { productFetchInterface, productInterface } from 'src/app/models/fetch.products.interface';

@Component({
  selector: 'app-listed-vehicles',
  templateUrl: './listed-vehicles.component.html',
  styleUrls: ['./listed-vehicles.component.css']
})
export class ListedVehiclesComponent implements OnInit {

  products!:productInterface[]

  constructor( private vehicleservice:ProductService){}

  ngOnInit(): void {

      this.vehicleservice.getProducts().subscribe((res)=>{
        if(res.products){
          this.products = res.products
        }
      })
    
  }

}
