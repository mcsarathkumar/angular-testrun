import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../_services/user.service';
import {UserCredentials, LoginResponse} from '../_models/animals';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = '';

  constructor(public userService: UserService, public router: Router) { }

  doLogin(form: NgForm) {
    const userCredentials: UserCredentials = {
      user: form.value.email,
      password: form.value.password
    };
    this.userService.login(userCredentials).subscribe((response: LoginResponse) => {
      if (response.isAuthorized) {
        this.userService.credentialValueChange.next(true);
        if (response.isAdmin) {
          this.router.navigate(['add']);
        } else {
          this.router.navigate(['pets']);
        }
      } else {
        this.errorMessage = 'Invalid Credentials';
      }
    });
  }

}
