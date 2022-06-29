import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { ISongs } from '../songs';
import { SongsService } from '../songs.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class HomeComponent implements OnInit {

  currentUser: any = {
    username: 'username'
  }


  searchText: any;

  public songs: any = []

  constructor(private dialogRef: MatDialog, private songService: SongsService, private userService: UsersService, private router: Router) {

   

    this.songService.getSongs().subscribe(songs => {
      this.songs = songs; 
      
    })


    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    })


    this.currentUser.username = localStorage.getItem('username')


 
   }

  ngOnInit(): void {


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
