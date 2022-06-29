import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  errors: any[] = []

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }


  logInUser(name: any, pass: any){

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

      this.userService.checkUser(newUser);

      
    }


}

}