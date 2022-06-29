import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }



  getFavorites(id: any): Observable<Number[]>{

    console.log(id)

    return this.http.get<Number[]>(`http://localhost:8080/favorites/songID/${id}`);
    
  }

  
}
