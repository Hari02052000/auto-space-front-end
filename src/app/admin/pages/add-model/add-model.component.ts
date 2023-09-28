import { Component,Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrandService } from '../../service/brand/brand.service';
import { TosterService } from 'src/app/service/toster/toster.service';
import { raceWith } from 'rxjs';

interface brandId{
  id:string
}


@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  modelForm!: FormGroup;
      
 addModelErr!: string|undefined;
 

  constructor(public dialogRef: MatDialogRef<AddModelComponent>,private formBuilder: FormBuilder,private brandservice:BrandService,private toster:TosterService,
     @Inject(MAT_DIALOG_DATA) private data:brandId
    ) {  }

   ngOnInit(): void {

    this.modelForm = this.formBuilder.group({
      modelName:['',Validators.required]
    })


   }
  

  onSubmit() {
    if (this.modelForm.valid) {
      console.log(this.modelForm.value.modelName,this.data.id)
      this.brandservice.addModel(this.modelForm.value.modelName,this.data.id).subscribe((res)=>{
        if(res.err){
          this.toster.showCustomToast('error',res.err)
        }
        if(res.created && res.model){
          this.toster.showCustomToast('success','model added')
          this.dialogRef.close({model:res.model})
        }
      })

    }


}
}