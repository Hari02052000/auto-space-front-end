import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubscriptionService } from '../../service/subscription/subscription.service';
import { Observable, Subscription, catchError, map, of, switchMap } from 'rxjs';
import { planInterface } from 'src/app/models/plan.interface';
import { TosterService } from 'src/app/service/toster/toster.service';
import { Router } from '@angular/router';

declare var Razorpay: any

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent implements OnInit, OnDestroy {
  plans$!: Observable<planInterface[] | undefined>;
  subscription!: Subscription;
  constructor(private subscriptionService: SubscriptionService, private tosterService: TosterService, private router: Router) { }

  ngOnInit(): void {
    const response = this.subscriptionService.fetchPlans()
    this.plans$ = response.pipe(map((res) => res.plans))

  }

  subscribe(id: string) {


    this.subscription = this.subscriptionService.subscribePlan(id).subscribe((res) => {

      if (res.err) {
        this.tosterService.showCustomToast('error', res.err)
      }

      if (res.payed && res.subscribed) {
        this.tosterService.showCustomToast('success', 'subscription added you can add cars now')
        this.router.navigate(['/add-car'])
      }
      if (res.isOnline && res.order) {

        this.makeOrder(res.order)

      }
    })
  }



  makeOrder(order: any) {
    console.log(order)
    let amount = order.amount
    amount = parseFloat(amount)
    var options = {
      "key": "rzp_test_8emA6zzli6nGP1",
      "amount": order.amount, 
      "currency": "INR",
      "name": "auto space",
      "description": "Test Transaction",
      "image": "https://www.pngmart.com/files/22/Car-Logo-PNG-Transparent.png",
      "order_id": order.id, 
      "handler":  (response: any)=> {

        this.verifyPayment(response,order)

      },

      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response: any) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();



  }

  verifyPayment(res:any,order:any){

    this.subscriptionService.verifyOnline(res,order).subscribe((res)=>{
      if(res.isPayed){

        this.tosterService.showCustomToast('success', 'subscription added you can add cars now')
        this.router.navigate(['/add-car'])


      }
      else{
        this.tosterService.showCustomToast('error','payment not completed try again')
      }
    })

  }

  //    async function verifyPayment(response,order){
  //     console.log(response)
  //   const result=await fetch('/verifyOnline',{
  //     method:'POST',
  //     body:JSON.stringify({response,order}),
  //     headers:{'content-Type':'application/json'}
  //   })
  //   const data = await result.json()
  //   console.log(data)


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }


}