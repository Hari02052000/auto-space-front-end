import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { PlanService } from '../../service/plan/plan.service';
import { planInterface } from 'src/app/models/plan.interface';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  constructor(private dialog:MatDialog,private planservice:PlanService){}

  plans!:planInterface[]
  addPlanDialogRef!: MatDialogRef<AddPlanComponent>;

ngOnInit(): void {
  this.planservice.getplans().subscribe((res)=>{
    if(res.plans){
      this.plans = res.plans
    }
  })
}
  openPlanDialog(){
    this.addPlanDialogRef = this.dialog.open(AddPlanComponent);

  }

}
