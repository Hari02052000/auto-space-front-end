import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

   brandForm!: FormGroup;
   addbrandErr$!: Observable<string|undefined>;
    constructor(public dialogRef: MatDialogRef<AddBrandComponent>,private formBuilder: FormBuilder) {
     this.brandForm = this.formBuilder.group({
        brandName:['',Validators.required]
      })
    }
 
   ngOnInit(): void {
   }
 
   onSubmit() {
     if (this.brandForm.valid) {
 
     }
   }
 

}
