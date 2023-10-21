import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

interface User{
  id? : number,
  firstName : string,
  lastName : string,
  contact : number,
  gender : string,
  emailAdderss : string,
  age : number,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users : Array<User> = [];
  constructor(private route : Router, private userService : UsersService){
      this.users = this.userService.users;
      console.log(this.users);
  }
  viewUser(userId? : number){
    this.route.navigate(['/user/',userId])
  }
}
