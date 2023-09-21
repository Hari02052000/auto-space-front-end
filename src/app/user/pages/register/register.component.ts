import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { noSpacesValidator } from 'src/app/validators/no-space-validator';
import { PasswordValidators } from 'src/app/validators/password-validaors'
import { Subscription } from 'rxjs';
import { TosterService } from 'src/app/service/toster/toster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  private subscription!: Subscription;



  constructor(
    private authservice: AuthService,
    private formBuilder: FormBuilder,
    private tosterservice:TosterService,
    private router:Router


  ) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.nullValidator]],
      username: ["", [Validators.required, Validators.required, noSpacesValidator()]],
      password: ["", [Validators.required, PasswordValidators.passwordValidator()]],
      confpassword: ["", [Validators.required, PasswordValidators.passwordMatchValidator('password')]]

    })

  }


  get email() {
    return this.registerForm.get('email')
  }
  get username() {
    return this.registerForm.get('username')
  }
  get password() {
    return this.registerForm.get('password')
  }
  get confpassword() {
    return this.registerForm.get('confpassword')
  }

  registerSubmit() {

    this.subscription = this.authservice.register(this.registerForm.value).subscribe((res) => {
      if (res.err) {

        this.tosterservice.showCustomToast('error',res.err)

      }
      else if (res.access_token && res.userCreated && res.email) {

        const event = new Event('userTokenChange');
        window.dispatchEvent(event);
        this.tosterservice.showCustomToast('success','please enter the otp in the registerd mail')
         this.router.navigate(['/otp',res.email,false])
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