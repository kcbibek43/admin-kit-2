import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

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
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit , OnDestroy{
  users : Array<User> = [];
  selectedUser: User | undefined;
  userId: number|undefined;
  constructor(private userService : UsersService){
      this.users = this.userService.users;
  }
  activeRoute : ActivatedRoute = inject(ActivatedRoute);
  paramMapObs : any;
  ngOnInit(){
   this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.userId =parseInt(data.get('id')!); 
      this.selectedUser =  this.users[this.userId-1];     
    })
  }
  ngOnDestroy(){
    this.paramMapObs.unsubscribe();
  }
}
