import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PetsComponent } from './pets/pets.component';
import { LoginComponent } from './login/login.component';
import { E404Component } from './e404/e404.component';

const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {component: HomeComponent, path: 'home'},
  {component: LoginComponent, path: 'login'},
  {component: PetsComponent, path: 'pets'},
  {component: E404Component, path: '**'},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }