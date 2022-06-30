import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {



  constructor(private dialogRef: MatDialog, private songService: SongsService) { }

  ngOnInit(): void {
  }

  addNewSong(song_name: any, 
    artist_name: any, 
    album_name: any, 
    url: any, 
    rating: any, 
    genre: any, 
    duration: any){

     

      let song = { 
        song_name: song_name,
        artist_name: artist_name,
        song_url: url,
        rating: rating,
        date_entered: new Date(),
        date_modified: new Date(),
        category: genre,
        album_name: album_name,
        duration: duration

      }
      


      this.songService.AddNewSong(song);



      this.dialogRef.closeAll()

      location.reload()








  }

}
