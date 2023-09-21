

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any[] = [
    {
      id: 1,
      name: 'Product 1',
      imageUrl: 'path/to/image1.jpg',
      viewsCount: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      imageUrl: 'path/to/image2.jpg',
      viewsCount: 200,
    },
    // Add more products as needed
  ];




}
