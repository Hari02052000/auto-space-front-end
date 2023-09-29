import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlanService } from 'src/app/admin/service/plan/plan.service';
import { planInterface } from 'src/app/models/plan.interface';
import { TosterService } from 'src/app/service/toster/toster.service';



@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent {

  editPlanForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<EditPlanComponent>,private formBuilder: FormBuilder,private planservice:PlanService,private toster:TosterService,
    @Inject(MAT_DIALOG_DATA) private data:planInterface) {

   this.editPlanForm = this.formBuilder.group({
      id:[data._id,Validators.required],
      name:[data.name,Validators.required],
      no_of_cars:[data.no_of_cars,Validators.required],
      validity_in_months:[data.validity_in_months,Validators.required],
      Amount:[data.Amount,Validators.required]

    })
  }

 ngOnInit(): void {
  console.log(this.data)
 }

 onSubmit() {
   if (this.editPlanForm.valid) {

   this.planservice.editPlan(this.editPlanForm.value).subscribe((res)=>{
     if(res.err){
       this.toster.showCustomToast('error',res.err)
     }
     if(res.edited && res.plan){
       this.toster.showCustomToast('success','added')
       this.dialogRef.close({newPlan:res.plan})
     }
   })

   }
 }



}
