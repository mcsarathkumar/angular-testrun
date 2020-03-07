import { Injectable } from '@angular/core';
import { UserCredentials, LoginResponse } from '../_models/animals';
import {Observable, of, Subject} from 'rxjs';

@Injectable()
export class UserService {

  isAdmin = false;
  isAuthorized = false;

  credentialValueChange = new Subject<boolean>();

  constructor() { }

  login(userCredentials: UserCredentials): Observable<LoginResponse> {
    
    const response: LoginResponse = {
      isAdmin: false,
      isAuthorized: false
    };
    if (userCredentials.user === 'guest@pets.com' && userCredentials.password === '12345') {
      response.isAdmin = false;
      response.isAuthorized = true;
      this.isAdmin = false;
      this.isAuthorized = true;
    } else if (userCredentials.user === 'admin@pets.com' && userCredentials.password === 'admin') {
      response.isAdmin = true;
      response.isAuthorized = true;
      this.isAdmin = true;
      this.isAuthorized = true;
    }
    return of(response);
  }

  logout() {
    this.isAdmin = false;
    this.isAuthorized = false;
    this.credentialValueChange.next(true);
  }

}
