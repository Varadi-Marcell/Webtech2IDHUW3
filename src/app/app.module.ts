import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatGridListModule} from "@angular/material/grid-list";
import { ViewUserComponent } from './user/view-user/view-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { GuitarComponent } from './guitar/guitar.component';
import { ViewGuitarComponent } from './guitar/view-guitar/view-guitar.component';
import { UpdateGuitarComponent } from './guitar/update-guitar/update-guitar.component';
import { CreateGuitarComponent } from './guitar/create-guitar/create-guitar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegistrationComponent,
    NavbarComponent,
    ViewUserComponent,
    UpdateUserComponent,
    GuitarComponent,
    ViewGuitarComponent,
    UpdateGuitarComponent,
    CreateGuitarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    MatGridListModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
