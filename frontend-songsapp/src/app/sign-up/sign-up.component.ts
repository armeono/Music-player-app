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

  errors: any = []


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

    const userInput = <HTMLInputElement>document.getElementById('userInput')
    const passInput = <HTMLInputElement>document.getElementById('passwordInput')

    if(passInput.value == "" || userInput.value == ""){

      passInput.style.border = "1px solid red"
      userInput.style.border = "1px solid red"

      this.errors = []

      this.errors.push("Input fields cannot be empty! Please try again!")

    }else { 

      this.userService.addUser(newUser);
      this.router.navigate(['/login'])
      
    }





  }

}
