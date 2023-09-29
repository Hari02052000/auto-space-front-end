import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PlanService } from 'src/app/admin/service/plan/plan.service';
import { TosterService } from 'src/app/service/toster/toster.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent {

  addPlanForm!: FormGroup;
   constructor(public dialogRef: MatDialogRef<AddPlanComponent>,private formBuilder: FormBuilder,private planservice:PlanService,private toster:TosterService) {
    this.addPlanForm = this.formBuilder.group({
       name:['',Validators.required],
       no_of_cars:['',Validators.required],
       validity_in_months:['',Validators.required],
       Amount:['',Validators.required]

     })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.addPlanForm.valid) {

    this.planservice.addPlan(this.addPlanForm.value).subscribe((res)=>{
      if(res.err){
        this.toster.showCustomToast('error',res.err)
      }
      if(res.isPlanAdded && res.plan){
        this.toster.showCustomToast('success','added')
        this.dialogRef.close({newPlan:res.plan})
      }
    })

    }
  }



}
