import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth/auth.service';
import { TosterService } from 'src/app/service/toster/toster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordValidators } from 'src/app/validators/password-validaors';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  changePasswordForm!: FormGroup;
  private subscription!: Subscription;
  email!:string|null



  constructor(
    private authservice: AuthService,
    private formBuilder: FormBuilder,
    private tosterservice:TosterService,
    private activeRoute: ActivatedRoute,
    private router:Router


  ) { }


  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      password: ["", [Validators.required, PasswordValidators.passwordValidator()]],
      confpassword: ["", [Validators.required, PasswordValidators.passwordMatchValidator('password')]]

    })

    this.email = this.activeRoute.snapshot.params['email']


  }


  get password() {
    return this.changePasswordForm.get('password')
  }
  get confpassword() {
    return this.changePasswordForm.get('confpassword')
  }

  changePassword() {

    const password = this.changePasswordForm.get('password')?.value
    const confpassword = this.changePasswordForm.get('confpassword')?.value

    if(password && confpassword && this.email)


    this.subscription = this.authservice.changePassword(this.email,password,confpassword).subscribe((res) => {
      if (res.err) {

        this.tosterservice.showCustomToast('error',res.err)

      }
      else if (res.isPasswordChanged) {

        localStorage.removeItem('userToken')

        this.tosterservice.showCustomToast('success','password updated please login to continue')
         this.router.navigate(['/login'])
      }
    }, (err) => {
      this.tosterservice.showCustomToast('error',err.error.message||'error')

    })





  }


  ngOnDestroy(): void {

    if (this.subscription) {

      this.subscription.unsubscribe()
    }



  }

}
