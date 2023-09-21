import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddPlanComponent } from './add-plan/add-plan.component';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  constructor(private dialog:MatDialog,private snackbar:MatSnackBar){}
  addPlanDialogRef!: MatDialogRef<AddPlanComponent>;


  openPlanDialog(){
    this.addPlanDialogRef = this.dialog.open(AddPlanComponent);

  }

}
