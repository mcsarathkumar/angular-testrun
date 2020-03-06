import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthorized = false;
  isAdmin = false;
  activateKeyword = null;
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.router.events.subscribe(res => {
      if(res instanceof NavigationEnd) {
        this.activateKeyword = res.urlAfterRedirects.split('/')[1];
      }
    });
    this.userService.credentialValueChange.subscribe(response => {
      this.isAuthorized = this.userService.isAuthorized;
      this.isAdmin = this.userService.isAdmin;
    })
  }

  addActiveClass(value) {
    return (value === this.activateKeyword) ? 'active' : '';
  }

  doLogout() {
    this.userService.logout();
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
    this.userService.credentialValueChange.unsubscribe();
  }
}