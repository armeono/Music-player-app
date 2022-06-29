import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUsers } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  defaultUser: IUsers = {
    id: 0,
    username: 'User',
    password: 'Password'
  }

  private user = new BehaviorSubject<IUsers>(this.defaultUser);

  currentUser = this.user.asObservable();


  constructor(private http: HttpClient, private router: Router) { }


  addUserURL: string = 'http://localhost:8080/users/newUser'

  logInUserURL: string = 'http://localhost:8080/users/logInUser'


  userIDURL: string = 'http://localhost:8080/users/userID'


  addUser(user: IUsers){
    this.http.post(this.addUserURL, user).subscribe();
  }

  checkUser(user: IUsers){

    this.http.post(this.logInUserURL, user).subscribe(response => {
      if(response == true){

        this.user.next(user);

        this.router.navigate(['/'])

        localStorage.setItem('username', user.username)
        
        
       

        
      }
    });


  }


  getUserID(username: string){

    return this.http.get<String>(`http://localhost:8080/users/userID/${username}`);

  }


}
