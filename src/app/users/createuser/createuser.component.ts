import { Component } from '@angular/core';
import {
  
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

interface User {
  id?: number;
  firstName: string;
  lastName: string;
  contact: number;
  gender: string;
  emailAdderss: string;
  age: number;
}

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
})
export class CreateuserComponent {
  userForm: FormGroup;
  user: Array<User> = [];

  constructor(private route: Router, private userService: UsersService) {
    this.user = this.userService.users;
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(4),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(2),
      ]),
      contact: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      gender: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      emailAdderss: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
    });
  }

  addUsersData() {
    if (this.userForm.valid) {
      this.userService.addUsers(this.userForm.value);
      this.route.navigate(['/', 'users']);
    }
  }
}
