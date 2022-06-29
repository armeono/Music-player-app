import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { FavoritesService } from '../favorites.service';
import { SongsService } from '../songs.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  userID: any;

  currentUser: any = {
    username: 'username'
  }

  searchText: any;



  public songs: any[] = []

  constructor(private dialogRef: MatDialog, 
    private userService: UsersService, 
    private songsService: SongsService, 
    private favService: FavoritesService,
    private router: Router) { 

    
  }

  ngOnInit(): void {

    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;

      console.log(this.currentUser)

     
    })


    this.currentUser.username = localStorage.getItem('username')

    this.userService.getUserID(this.currentUser.username).subscribe(res => {

      this.favService.getFavorites(res).subscribe(res => {

        res.forEach(id => {

          this.songsService.getOneSong(id).subscribe(response => {

            this.songs.push(response);

          })
          
        })
        
      })
    
    })


    




    
  }

  openPopUp(song: any){
    
    this.dialogRef.open(DetailsComponent, {
      data: song,
      panelClass: 'custom-dialog'
    })
  }


  logOut(){
    this.router.navigate(['/login'])
    localStorage.removeItem('username')

  }



}
