import {Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User | undefined;

  errorMessage!: string;

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private appComponent: AppComponent,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async login() {
    const user = await this.authService.authenticateUser(
      this.loginForm.controls['username'].value,
      this.loginForm.controls['password'].value
    );

    if (user !== null) {
      this.appComponent.isLoggedIn = true;
    } else {
      this.loginForm.controls['username'].setValue(null);
      this.loginForm.controls['password'].setValue(null);
    }

    if (this.appComponent.isLoggedIn) {
      await this.router.navigateByUrl('/user');
    }
  }

  async register() {
    await this.router.navigate(['/register']);
  }

}
