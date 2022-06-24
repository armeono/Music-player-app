import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsers } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: any;


  constructor(private userService: UsersService, private router: Router) {

    this.userService.currentUser.subscribe(user => {
      this.user = user;
    })
   }

  ngOnInit(): void {

  }


  signUpUser(name: any, pass: any){

    let newUser = { 
      username: name,
      password: pass
    }

    this.userService.addUser(newUser);



  }

}
