import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BrandService } from '../../service/brand/brand.service';
import { noSpacesValidator } from 'src/app/validators/no-space-validator';
import { TosterService } from 'src/app/service/toster/toster.service';


@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {


   brandForm!: FormGroup;
   addbrandErr!: string|undefined;
    constructor(public dialogRef: MatDialogRef<AddBrandComponent>,private formBuilder: FormBuilder,private brandservice:BrandService,private toster:TosterService) {
     this.brandForm = this.formBuilder.group({
        brandName:['',Validators.required]
      })
    }
 
   ngOnInit(): void {
   }

   get brandName() {
    return this.brandForm.get('brandName')
  }

 
   onSubmit() {

    this.brandservice.addbrand(this.brandForm.value).subscribe((res)=>{
     if(res.err){
      this.addbrandErr = res.err
     }
     if(res.brand && res.created){

      this.toster.showCustomToast('success','brand added')

      this.dialogRef.close({brand:res.brand})

     }
    })
  }


 

}
