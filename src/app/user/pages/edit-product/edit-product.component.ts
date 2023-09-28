import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
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
  product!: productInterface
  constructor(private router: Router, private tost: TosterService, private productservice: ProductService, private activeRoute: ActivatedRoute) { }


  ngOnInit(): void {

    const id = this.activeRoute.snapshot.params['id']


    this.productservice.getEditProductDetails(id).subscribe((res) => {
      console.log(res)
      if (res.product) {
        console.log(res.product)
        this.product = res.product
      }
    })

  }



  deleteimage(i: number) {
    console.log(i)
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

        for (let i = 0; i < files.length; i++) {
          const newImage = files[i];
          imagesForm.append(`images${i}`, newImage);
        }

      }
    }
    )
    input.click()
  }
}
