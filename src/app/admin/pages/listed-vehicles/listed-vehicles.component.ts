import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { productFetchInterface, productInterface } from 'src/app/models/fetch.products.interface';
import Swal from 'sweetalert2';

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

  async listvehicle(id:string,brand:string,model:string,option:string){
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `did you want to list  ${brand} ${model} ${option}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText:'No'
    })
    if (result.isConfirmed) {

      this.vehicleservice.listProduct(id).subscribe((res)=>{
        if(res.listed){
          const vehicle = this.products.find(vehicle=>vehicle._id === id)
          if(vehicle){
            vehicle.isListed = true
          }
        }
      })

    }
  }

  async unlistvehicle(id:string,brand:string,model:string,option:string){

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `did you want to unlist ${brand} ${model} ${option}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText:'No'
    })
    if (result.isConfirmed) {

      this.vehicleservice.UnlistProduct(id).subscribe((res)=>{
        if(res.unlisted){

          const vehicle = this.products.find(vehicle=>vehicle._id === id)
          if(vehicle){
            vehicle.isListed = false
          }


        }
      })

    }


  }

}
