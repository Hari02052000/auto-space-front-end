import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { FetchPlanResponseInterface, subscriptionResponseInterface, veriPaymentResponseInterface } from '../../models/fetch-plan-response';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl

  fetchPlans() {

    return this.http.get<FetchPlanResponseInterface>(`${this.baseUrl}/user/subscription/get-plans`)

  }

  subscribePlan(id: string) {

  return  this.http.post<subscriptionResponseInterface>(`${this.baseUrl}/user/subscription/create-payment`, { planId: id })
}
verifyOnline(res:any,order:any){

  return  this.http.post<veriPaymentResponseInterface>(`${this.baseUrl}/user/subscription/verify-payment`, { response:res,order:order })
}



}


// function makeOrder(order:any) {
//   console.log(order)
//   let amount = order.amount
//   amount = parseFloat(amount)

//   const options = {
//     key_id: 'rzp_test_8emA6zzli6nGP1', // Add your Razorpay Key ID here
//     amount: order.amount,
//     currency: 'INR',
//     name: 'auto space',
//     description: 'Test Transaction',
//     image: 'https://example.com/your_logo',
//     order_id: order.id,
//     handler: function (response: any) {
//       alert(response);
//       // verifyPayment(response, order);
//     },
//     notes: {
//       address: 'Razorpay Corporate Office',
//     },
//     theme: {
//       color: '#3399cc',
//     },
//   };
  
  
//   var rzp1:any = new Razorpay(options);
//   rzp1.on('payment.failed', function (response:any) {
//     alert(response.error.code);
//     alert(response.error.description);
//     alert(response.error.source);
//     alert(response.error.step);
//     alert(response.error.reason);
//     alert(response.error.metadata.order_id);
//     alert(response.error.metadata.payment_id);
//   });

//   rzp1.open();





