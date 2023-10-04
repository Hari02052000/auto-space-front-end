import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrandService } from '../../service/brand/brand.service';
import { TosterService } from 'src/app/service/toster/toster.service';

interface data{
  modelId:string,
  modelName:string
}


@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.css']
})
export class EditModelComponent {

  

  editModelForm:FormGroup

  constructor(public dialogRef: MatDialogRef<EditModelComponent>,private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) private data:data,private brandservice:BrandService,private toster:TosterService) {
    this.editModelForm = this.formBuilder.group({
      modelName:[this.data.modelName,Validators.required]
    })
  }

  

   onSubmit() {
     if (this.editModelForm.valid) {

      const modelname = this.editModelForm.get('modelName')?.value;

      this.brandservice.editmodel(modelname,this.data.modelId).subscribe((res)=>{
        console.log(res)
  
        if(res.err){
          this.toster.showCustomToast('error',res.err)
        }
        if(res.edited){
          this.toster.showCustomToast('success','edited')
          this.dialogRef.close({modelname:modelname})
        }
      })


    }
  }



}
