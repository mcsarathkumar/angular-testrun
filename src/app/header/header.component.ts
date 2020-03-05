import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  isAdmin = false;
  activateKeyword = null;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(res => {
      if(res instanceof NavigationEnd) {
        this.activateKeyword = res.url.split('/')[1];
      }
    });
  }

  addActiveClass(value) {
    return (value === this.activateKeyword) ? 'active' : '';
  }

}