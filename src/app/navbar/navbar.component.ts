import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {User} from "../model/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
  ) {}

  ngOnInit(): void {}


}
