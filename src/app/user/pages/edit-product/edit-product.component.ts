import { Component,AfterViewInit,OnDestroy } from '@angular/core';

declare var $: any; 


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements AfterViewInit, OnDestroy {

  private table: any; // Variable to hold the DataTable instance

  ngAfterViewInit() {
    // Initialize the DataTable in this hook
    this.initDataTable();
  }

  ngOnDestroy() {
    // Destroy the DataTable when the component is destroyed to prevent memory leaks
    if (this.table) {
      this.table.destroy();
    }
  }

  private initDataTable() {
    this.table = $('#myDataTable').DataTable({
      // DataTable options and configuration go here
    });
  }


}
