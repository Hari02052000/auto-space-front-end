import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TosterService } from 'src/app/service/toster/toster.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  OtpForm!: FormGroup;
  resendDisabled: boolean = false;
  private timerInterval: any;
  resendCooldownSeconds: number = 30;
  email!: string | null
  changePassword:any = undefined
  private subscription!: Subscription;



  constructor(
    private formbulder: FormBuilder,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private tosterservice: TosterService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.startResendCooldown();

    this.OtpForm = this.formbulder.group({
      otp: ["", [Validators.required]],

    })

    this.email = this.activeRoute.snapshot.params['email']
   this.changePassword = this.activeRoute.snapshot.params['isPasswordChange'] 



  }
  get otp() {
    return this.OtpForm.get('otp')
  }


  startResendCooldown() {
    this.resendDisabled = true;
    this.timerInterval = setInterval(() => {
      this.resendCooldownSeconds--;
      if (this.resendCooldownSeconds <= 0) {
        this.clearTimer();
        this.resendDisabled = false;
      }
    }, 1000);
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  resendOtp() {
    this.resendCooldownSeconds = 30
    this.startResendCooldown();
  }

  Submit() {

    const otp = this.OtpForm.get('otp')?.value
    if (otp && this.email)

      this.subscription = this.authService.veryfyOtp(otp, this.email).subscribe((res) => {
        if (res.err) {

          this.tosterservice.showCustomToast('error', res.err)


        }

        else if (res.verification) {


          this.tosterservice.showCustomToast('success', 'verified')
          console.log(this.changePassword)

          if(this.changePassword === 'true'){

            this.router.navigate(['/change-password',this.email])


          }

          else{
            this.router.navigate([''])

          }



        }

      }, (err) => {

        this.tosterservice.showCustomToast('error', err.error.message || 'error')


      })






  }



  ngOnDestroy(): void {
    this.clearTimer();

    if (this.subscription) {

      this.subscription.unsubscribe()
    }


  }


}
