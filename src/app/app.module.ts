import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PetsComponent } from './pets/pets.component';
import { LoginComponent } from './login/login.component';
import { E404Component } from './e404/e404.component';
import { AnimalService } from './_services/animal.service';
import { UserService } from './_services/user.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpClientModule, AppRoutingModule],
  declarations: [ AppComponent,  HomeComponent, HeaderComponent, PetsComponent, LoginComponent, E404Component ],
  bootstrap:    [ AppComponent ],
  providers: [AnimalService, UserService]
})
export class AppModule { }
