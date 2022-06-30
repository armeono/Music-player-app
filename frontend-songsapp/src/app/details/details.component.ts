import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavoritesService } from '../favorites.service';
import { FavoritesComponent } from '../favorites/favorites.component';
import { SongsService } from '../songs.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  
})
export class DetailsComponent implements OnInit {

  currentState: any;

  currentUser: any = {
    username: 'username'
  }


  song: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private favService: FavoritesService,
   private userService: UsersService,
   private dialogRef: MatDialog,
   private songService: SongsService)
  {

    this.favService.currentState.subscribe(data => {
      this.currentState = data

      console.log(data)
    })

    this.currentUser.username = localStorage.getItem('username');
    
  
    this.song = data;

    
    
   }

  ngOnInit(): void {
  }

  addToFavorites(song: any){

    this.userService.getUserID(this.currentUser.username).subscribe(response => {

      this.favService.addToFavorites(response, song.id);

      console.log("song added")

      this.dialogRef.closeAll()


    })

  }

  removeFromFavorites(song: any){

    this.userService.getUserID(this.currentUser.username).subscribe(response => {
      this.favService.removeFromFavorites(response, song.id);

      console.log("song removed")

      this.dialogRef.closeAll()

      location.reload()

      
    })

  }

  deleteSong(song: any){

    this.userService.getUserID(this.currentUser.username).subscribe(response => {
      this.favService.removeFromFavorites(response, song.id);

      console.log("song removed")



    this.songService.DeleteSong(song);

    this.dialogRef.closeAll()

    location.reload()



      



      
    })

  }

}
