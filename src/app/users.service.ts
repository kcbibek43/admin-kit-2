import { Injectable } from '@angular/core';
interface User{
  id? : number,
  firstName : string,
  lastName : string,
  contact : number,
  gender : string,
  emailAdderss : string,
  age : number,
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  users : Array<User> = [
    {
      id : 1,
      firstName : "Bibek",
      lastName : "KC",
      contact : 7347398516,
      gender : 'Male',
      emailAdderss : "kcbibek43@gmail.com",
      age : 22,
    },
    {
      id : 2,
      firstName : "Bhuvan",
      lastName : "Sood",
      contact : 7347395516,
      gender : 'Male',
      emailAdderss : "bhuvan43@gmail.com",
      age : 22,
    },
    {
      id : 3,
      firstName : "Chirag",
      lastName : "Rawat",
      contact : 7347308516,
      gender : 'Male',
      emailAdderss : "chirag76@gmail.com",
      age : 22,
    }
  ]

  constructor() {
  }
  addUsers(newUser : User){
    newUser.id = this.users.length + 1;
    this.users.push(newUser);
   }
}
