import {Component, NgZone, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private userService: AuthService,
              private fb: FormBuilder,
              private ngZone: NgZone,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:  ['', [Validators.required, Validators.minLength(5)]],
      password:  ['', [Validators.required,Validators.minLength(5)]],
    });
  }

  register(){
    if(!this.registerForm.valid){
      return false;
    }else{
      console.log("ad");
      return this.userService
        .registerUser(
          this.registerForm.value.username,
          this.registerForm.value.password)
        .subscribe({
          complete: () => {
            this.ngZone.run(() => this.router.navigateByUrl('/'));
          }
        })
    }
  }
}
