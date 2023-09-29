import { Component, Inject,OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BrandService } from '../../service/brand/brand.service';
import { TosterService } from 'src/app/service/toster/toster.service';

interface data{
  brandId:string,
  modelId:string
}


@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.css']
})
export class AddOptionComponent implements OnInit,OnDestroy {

  optionForm:FormGroup

  addOptionErr: string|undefined;
 subscription! : Subscription

  constructor(public dialogRef: MatDialogRef<AddOptionComponent>,private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) private data:data, private brandservice:BrandService,private toster:TosterService
  ) {
    this.optionForm = this.formBuilder.group({
      optionName:['',Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.optionForm.valid) {
         
    this.subscription  =  this.brandservice.addOption(this.optionForm.value.optionName,this.data.brandId,this.data.modelId).subscribe((res)=>{
      if(res.err){
        this.toster.showCustomToast('error',res.err)
      }

      if(res.created && res.option){
        this.toster.showCustomToast('success','option added')
        this.dialogRef.close({option:res.option})
      }

    })
    }
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
