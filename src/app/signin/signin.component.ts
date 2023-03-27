import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  private URL = 'http://localhost:3000/api/v1/users/'

  formUser = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient, public router: Router) {}

  signIn() {

    return this.http.post<any>(this.URL, this.formUser.value)

  }
}
