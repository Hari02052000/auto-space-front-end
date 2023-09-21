import { Component, OnInit,OnDestroy } from '@angular/core';
import { SubscriptionService } from '../../service/subscription/subscription.service';
import { Observable, Subscription, catchError, map, of, switchMap } from 'rxjs';
import { planInterface } from 'src/app/models/plan.interface';
import { TosterService } from 'src/app/service/toster/toster.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent implements OnInit,OnDestroy {
  plans$!: Observable<planInterface[] | undefined>;
  subscription!: Subscription;
constructor(private subscriptionService:SubscriptionService,private tosterService:TosterService,private router:Router){}

  ngOnInit(): void {
  const response =   this.subscriptionService.fetchPlans()
  this.plans$ = response.pipe(map((res)=>res.plans))

  }

  subscribe(id:string){


    this.subscription =  this.subscriptionService.subscribePlan(id).subscribe((res)=>{

      if(res.err){
       this.tosterService.showCustomToast('error',res.err)
      }

      if(res.payed && res.subscribed){
       this.tosterService.showCustomToast('success','subscription added you can add cars now')
       this.router.navigate(['/add-car'])
      }
    })
  }



ngOnDestroy(): void {
  if(this.subscription){
    this.subscription.unsubscribe()
  }
}


}