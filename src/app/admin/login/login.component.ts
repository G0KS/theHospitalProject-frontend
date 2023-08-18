import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLogged: boolean = false;
  user: any = '';

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    if (username == 'admin' && password == 'admin') {
      this.isLogged = true;
      localStorage.setItem('loggedUser', username);
      this.user = localStorage.getItem('loggedUser');
      setTimeout(() => {
        this.router.navigateByUrl('/admin/dashboard');
      }, 2000);
    }
  }
}
