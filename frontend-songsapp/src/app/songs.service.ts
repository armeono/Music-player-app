import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { ISongs } from './songs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private songsInfo = new BehaviorSubject<ISongs>({
    id: 0,
    song_name: "song name",
    artist_name: "artist name",
    song_url: "url",
    rating: 5,
    date_entered: "entered",
    date_modified: "modified",
    category: "category",
    album_name: "album"
  })

  currentSongs = this.songsInfo.asObservable();

  url: string = ''


  constructor(private http: HttpClient) { }

  getSongs(): Observable<ISongs[]>{
    return this.http.get<ISongs[]>(this.url);
  }
}
