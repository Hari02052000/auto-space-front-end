import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TosterService } from 'src/app/service/toster/toster.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
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

    this.subscription = this.authservice.login(this.loginForm.value).subscribe((res) => {
      if (res.err) {

        this.toster.showCustomToast('error', res.err)

      }
      else if (res.access_token && res.isUser) {

        const event = new Event('userTokenChange');
        window.dispatchEvent(event);

        this.router.navigate([''])
        this.toster.showCustomToast('success', 'Login Successful');

      }
    }, (err) => {
      this.toster.showCustomToast('error', err.error.message)
    })



  }

  
  ngOnDestroy(): void {

    if (this.subscription) {

      this.subscription.unsubscribe()
    }


  }


}
