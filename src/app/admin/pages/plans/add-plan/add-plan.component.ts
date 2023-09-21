import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent {

  addPlanForm!: FormGroup;
  addbrandErr$!: Observable<string|undefined>;
   constructor(public dialogRef: MatDialogRef<AddPlanComponent>,private formBuilder: FormBuilder) {
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

    }
  }



}
