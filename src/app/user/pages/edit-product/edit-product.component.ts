import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInterface } from 'src/app/models/fetch.products.interface';
import { TosterService } from 'src/app/service/toster/toster.service';
import { ProductService } from '../../service/product/product.service';
import Swal from 'sweetalert2';

declare var $: any;


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product!: productInterface
  constructor(private router: Router, private tost: TosterService, private productservice: ProductService, private activeRoute: ActivatedRoute) { }
  price!:number 
  year!:number
  fuel:string = ''
  kmDriven!:number
  Location:string = ''
  no_of_owners!:number


  ngOnInit(): void {

    const id = this.activeRoute.snapshot.params['id']
    

    this.productservice.getEditProductDetails(id).subscribe((res) => {
      console.log(res)
      if (res.product) {
        console.log(res.product)
        this.product = res.product
      }

      this.price = this.product.price
      this.Location = this.product.Location
      this.fuel = this.product.fuel
      this.year = this.product.year
      this.no_of_owners = this.product.no_of_owners
      this.kmDriven = this.product.kmDriven
    })

  }



  async deleteimage(i: number, productid: string) {

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `You want to remove the image`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    })
    if (result.isConfirmed) {

      this.productservice.deleteImage(i, productid).subscribe((res) => {
        if (res.err) {
          this.tost.showCustomToast('error', res.err)
        }
        if (res.imageRemoved) {
          this.product.images.splice(i, 1)
        }
      })


    }


  }

  uploadImages() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.addEventListener('change', async () => {
      const files = input.files;
      if (files && files.length > 0) {
        const imagesForm = new FormData();

        // for (let i = 0; i < this.selectedImages.length; i++) {
        //   productForm.append('images', this.selectedImages[i]);
        // }
    

        for (let i = 0; i < files.length; i++) {
          imagesForm.append('images',files[i])
          
          // const newImage = files[i];
          // imagesForm.append(`images${i}`, newImage);
        }

        imagesForm.append('productid',this.product._id)


        this.productservice.uploadimages(imagesForm).subscribe((res)=>{
        if(res.err){
          alert(res.err)
        }

        if(res.images && res.uploaded){
          for(let i =0;i<res.images.length;i++){
            this.product.images.push(res.images[i])
          }
        }

        })
       
      }

    }
    )
    input.click()
  }

  update(id:string){
    this.productservice.updateProduct(this.price,this.year,this.fuel,this.kmDriven,this.Location,this.no_of_owners,id).subscribe((res)=>{
      if(res.updated){
        this.product.price = this.price
        this.product.year = this.year
        this.product.fuel = this.fuel
        this.product.kmDriven = this.kmDriven
        this.product.Location = this.Location
        this.no_of_owners = this.no_of_owners
        this.tost.showCustomToast('success','updated')
      }
    })
  }
}
