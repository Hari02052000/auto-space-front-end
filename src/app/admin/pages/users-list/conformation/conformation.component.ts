import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



interface data {
  username:string,
  action:string
}


@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.css']
})
export class ConformationComponent {


  constructor(public dialogRef: MatDialogRef<ConformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data:data
   ) {}


}
