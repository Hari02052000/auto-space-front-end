import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TosterService } from 'src/app/service/toster/toster.service';
import { BrandService } from '../../service/brand/brand.service';

interface data{
  brandId:string,
  brandName:string
}


@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent {

 editBrandForm:FormGroup

  constructor(public dialogRef: MatDialogRef<EditBrandComponent>,private formBuilder: FormBuilder,private toster:TosterService,@Inject(MAT_DIALOG_DATA) private data:data,private brandservice:BrandService) {
    this.editBrandForm = this.formBuilder.group({
      brandName:[this.data.brandName,Validators.required]

    })
  }

  

  onSubmit() {
   if (this.editBrandForm.valid) {

    const brandname = this.editBrandForm.get('brandName')?.value;

    this.brandservice.editbrand(brandname,this.data.brandId).subscribe((res)=>{
      console.log(res)

      if(res.err){
        this.toster.showCustomToast('error',res.err)
      }
      if(res.edited){
        this.toster.showCustomToast('success','edited')
        this.dialogRef.close({brandname:brandname})
      }
    })
      


   }
  }


}
