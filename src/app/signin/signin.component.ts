import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  get email() {
    return this.formUser.get('email') as FormControl;
  }

  get password() {
    return this.formUser.get('password') as FormControl;
  }

  formUser = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public router: Router) {}

  signIn() {
    const email :string = 'pablo_picasso@ecosat.com.mx';
    const password: string | number = '123456';
    if (
      this.formUser.value.email == email &&
      this.formUser.value.password === password)
     {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
