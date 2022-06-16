import {Component, NgZone, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user!: User;
  userForm!: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              public ngZone:NgZone,
              public router:Router
  ) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['preload'];
    this.userForm = this.fb.group({
      username:  [this.user.username, [Validators.required, Validators.minLength(5)]],
      password:  [this.user.password, [Validators.required,Validators.minLength(5)]],
    });
  }

  onSubmit() {
    //this.userService.updateUser(this.user._id,this.userForm.value);
    if (!this.userForm.valid) {
      return false;
    } else {
      return this.userService.updateUser(this.user._id,this.userForm.value).subscribe({
        complete: () => {
          console.log('User successfully updated!'),
            this.ngZone.run(() => this.router.navigateByUrl('/user'));
        },
        error: (e: any) => {
          console.log(e);
        },
      });
    }
  }
}
