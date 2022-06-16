import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!: User[];
  constructor(private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => this.users = data);
  }
  delete(id:any){
    console.log(id);
    this.userService.deleteUser(id);
    this.userService.getAllUser().subscribe(data => this.users = data);
    this.ngOnInit();

  }

}
