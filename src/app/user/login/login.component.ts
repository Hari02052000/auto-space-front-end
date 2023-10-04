import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { Subject, Subscription, map, switchMap, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { TosterService } from 'src/app/service/toster/toster.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  public Submitted: boolean = false
  isLoading:boolean = false


  constructor(
    private authservice: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toster: TosterService


  ) { }
  loginForm!: FormGroup;
  private subscription!: Subscription;
  private destroy$ = new Subject<void>();





  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.nullValidator]],
      password: ["", [Validators.required, Validators.nullValidator]],

    })

  }


  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }


  loginSubmit() {

    this.isLoading = true

    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.loginFormSubmit$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          this.isLoading = false
          if (res.err) {
            this.toster.showCustomToast('error', res.err);
          } else if (res.access_token && res.isUser) {
            const event = new Event('userTokenChange');
            window.dispatchEvent(event);
            this.router.navigate(['']);
            this.toster.showCustomToast('success', 'Login Successful');
          }
        },
        (err) => {
          this.isLoading = false
          console.log(err)
          this.toster.showCustomToast('error', err.message);
        }
      );


    // this.subscription = this.authservice.login(this.loginForm.value).subscribe((res) => {
    //   if (res.err) {

    //     this.toster.showCustomToast('error', res.err)

    //   }
    //   else if (res.access_token && res.isUser) {

    //     const event = new Event('userTokenChange');
    //     window.dispatchEvent(event);

    //     this.router.navigate([''])
    //     this.toster.showCustomToast('success', 'Login Successful');

    //   }
    // }, (err) => {
    //   this.toster.showCustomToast('error', err.error.message)
    // })



  }

  private loginFormSubmit$() {

    return this.authservice.login(this.loginForm.value).pipe(
      map((res) => {
        return res;
      })
    );
  

  }


  ngOnDestroy(): void {


    this.destroy$.next();
    this.destroy$.complete();
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  


  }


}
