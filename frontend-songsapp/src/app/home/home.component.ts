import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { ISongs } from '../songs';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class HomeComponent implements OnInit {



  searchText: any;

  public songs: any = []

  constructor(private dialogRef: MatDialog, private songService: SongsService) {

    this.songService.getSongs().subscribe(songs => {
      this.songs = songs; 
    })


 
   }

  ngOnInit(): void {
  }

  openPopUp(song: any){
    
    this.dialogRef.open(DetailsComponent, {
      data: song,
      panelClass: 'custom-dialog'
    })
  }

}
