import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';
import { TosterService } from 'src/app/service/toster/toster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;
  public Submitted: boolean = false


constructor(
  private authservice:AuthService,
  private formBuilder: FormBuilder,
 private toastr:TosterService,
  private router: Router,


  ){}
  loginForm!: FormGroup; 
  private subscription!: Subscription;

 


 ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
       email : ["",[Validators.required,Validators.email]],
       password:["",[Validators.required]],

      })
     
 }
  
 
 get email(){
   return this.loginForm.get('email')
 }
 
 get password(){
   return this.loginForm.get('password')
 }
 

 loginSubmit(){
  
this.subscription = this.authservice.login(this.loginForm.value).subscribe((res)=>{
   if(res.err){
     this.toastr.showCustomToast('error',res.err)
    // this.toastr.warning(res.err, 'warning')


    }
   else if(res.access_token && res.isAdmin){
     this.router.navigate(['admin'])
     this.toastr.showCustomToast('success','success')

     //this.toastr.success('login success','success')
   }
  } 
  , 
  (err) => {
    this.toastr.showCustomToast('error','error')
   //this.toastr.warning(err.error.message, 'warning')
    //alert(err.error.message)
 })
  

   
 }
 ngOnDestroy(): void {

  if(this.subscription){

    this.subscription.unsubscribe()
  }
  
}


}
