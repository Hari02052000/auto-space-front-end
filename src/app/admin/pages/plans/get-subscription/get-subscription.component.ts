import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PlanService } from 'src/app/admin/service/plan/plan.service';

@Component({
  selector: 'app-get-subscription',
  templateUrl: './get-subscription.component.html',
  styleUrls: ['./get-subscription.component.css']
})
export class GetSubscriptionComponent implements OnInit {

  subscriptionDetails!: FormGroup;

  constructor(public dialogRef: MatDialogRef<GetSubscriptionComponent>, private planservice:PlanService,private fb: FormBuilder){}

  ngOnInit(): void {
    this.subscriptionDetails = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],})
  
  }

  onSubmit(){

    this.planservice.getSubscriptionDetails(this.subscriptionDetails.value).subscribe((blob:Blob)=>{

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'subscription-details.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      this.dialogRef.close()

    })

  }


}
