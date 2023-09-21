import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TosterService } from 'src/app/service/toster/toster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  veryfyEmailForm!: FormGroup;
  public Submitted: boolean = false


  constructor(
    private authservice: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toster: TosterService


  ) { }
  loginForm!: FormGroup;
  private subscription!: Subscription;




  ngOnInit(): void {
    this.veryfyEmailForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.nullValidator]],

    })

  }


  get email() {
    return this.veryfyEmailForm.get('email')
  }


  veryfyEmail() {
    this.subscription = this.authservice.verifyEmail(this.veryfyEmailForm.value).subscribe((res) => {
      if (res.err) {

        this.toster.showCustomToast('error', res.err)


      }

      else if (res.email && res.isUserEmail) {

        this.toster.showCustomToast('success', 'email verified')

        this.router.navigate(['/otp', res.email,true])


      }

    }, (err) => {

      this.toster.showCustomToast('error', err.error.message || 'error')


    })



  }

  ngOnDestroy(): void {

    if (this.subscription) {

      this.subscription.unsubscribe()
    }


  }




}
