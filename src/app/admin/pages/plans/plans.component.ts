import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { PlanService } from '../../service/plan/plan.service';
import { planInterface } from 'src/app/models/plan.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetSubscriptionComponent } from './get-subscription/get-subscription.component';
import { EditPlanComponent } from './edit-plan/edit-plan.component';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  subscriptionDetails!: FormGroup;

  constructor(private dialog:MatDialog,private planservice:PlanService,private fb: FormBuilder){}

  plans!:planInterface[]
  addPlanDialogRef!: MatDialogRef<AddPlanComponent>;
  downloadDialogRef!:MatDialogRef<GetSubscriptionComponent>
  editPlanDialogRef!:MatDialogRef<EditPlanComponent>

ngOnInit(): void {

  this.planservice.getplans().subscribe((res)=>{
    if(res.plans){
      this.plans = res.plans
    }
  })


}
  openPlanDialog(){
    this.addPlanDialogRef = this.dialog.open(AddPlanComponent);
    this.addPlanDialogRef.afterClosed().subscribe((res)=>{
      if(res.newPlan){
        this.plans.push(res.newPlan)
      }
    })

  }
  openDownload(){
   this.downloadDialogRef = this.dialog.open(GetSubscriptionComponent)
  }
 
  openeditPlan(id:string){
    let plan = this.plans.find((plan)=>plan._id === id)
    this.editPlanDialogRef = this.dialog.open(EditPlanComponent,{data:plan})
    this.editPlanDialogRef.afterClosed().subscribe((res)=>{
      if(res.newPlan){
        this.plans = this.plans.map(plan => {
          if (plan._id === res.newPlan._id) {
              return res.newPlan;
          } else {
              return plan;
          }
      });
       
      }
    })
  }

}
