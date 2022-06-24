import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUsers } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  defaultUser: IUsers = {
    username: 'User',
    password: 'Password'
  }

  private user = new BehaviorSubject<IUsers>(this.defaultUser);

  currentUser = this.user.asObservable();


  constructor(private http: HttpClient) { }


  url: string = 'http://localhost:8080/users/newUser'

  addUser(user: IUsers){
    this.http.post(this.url, user).subscribe();
  }


}
