import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TosterService } from 'src/app/service/toster/toster.service';
import { BrandService } from '../../service/brand/brand.service';

interface data{
  optionId:string,
  optionName:string
}


@Component({
  selector: 'app-edit-option',
  templateUrl: './edit-option.component.html',
  styleUrls: ['./edit-option.component.css']
})
export class EditOptionComponent {

  editOptionForm:FormGroup

    constructor(public dialogRef: MatDialogRef<EditOptionComponent>,private formBuilder: FormBuilder,private toster:TosterService,@Inject(MAT_DIALOG_DATA) private data:data,private brandservice:BrandService) {
    this.editOptionForm = this.formBuilder.group({
      optionName:[this.data.optionName,Validators.required]
    })
  }

  

  onSubmit() {
    if (this.editOptionForm.valid) {

      const optionname = this.editOptionForm.get('optionName')?.value;

      this.brandservice.editoption(optionname,this.data.optionId).subscribe((res)=>{
        console.log(res)
  
        if(res.err){
          this.toster.showCustomToast('error',res.err)
        }
        if(res.edited){
          this.toster.showCustomToast('success','edited')
          this.dialogRef.close({optionname:optionname})
        }
      })
  

    }
  }



}
