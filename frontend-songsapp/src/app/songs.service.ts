import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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
    album_name: "album",
    duration: "00:00"
  })

  currentSongs = this.songsInfo.asObservable();

  url: string = 'http://localhost:8080/songs/getSongs'




  constructor(private http: HttpClient) { }

  getSongs(): Observable<ISongs[]>{

    let songs: any = []

    songs = this.http.get<ISongs[]>(this.url);

    return songs;
    
  }

  postSongURL: string = 'http://localhost:8080/songs/addSong'

  getOneSong(id: any): Observable<ISongs> {
    return this.http.get<ISongs>(`http://localhost:8080/songs/getOneSong/${id}`);
  }

  DeleteSong(song: any){
    this.http.delete(`http://localhost:8080/songs/deleteSong/${song.id}`).subscribe();
  }

  AddNewSong(song: any){

    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');

    console.log(song)

    this.http.post(this.postSongURL, song, {headers: headers}).subscribe();
  }


}
