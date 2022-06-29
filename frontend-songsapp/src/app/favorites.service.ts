import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private state = new BehaviorSubject<String>("none");

  currentState = this.state.asObservable();



  constructor(private http: HttpClient) { }

  changeToHome(){

    this.state.next("home")
  }

  changeToFavorites(){
    this.state.next("favorites")
  }



  getFavorites(id: any): Observable<Number[]>{

    console.log(id)

    return this.http.get<Number[]>(`http://localhost:8080/favorites/songID/${id}`);
    
  }

  addToFavorites(user_id: any, song_id: any){

   this.http.post(`http://localhost:8080/favorites/postSong/${user_id}/${song_id}`, null).subscribe();

  }

  removeFromFavorites(user_id: any, song_id: any){
    
   this.http.delete(`http://localhost:8080/favorites/deleteSong/${user_id}/${song_id}`).subscribe();
  }

  
}
