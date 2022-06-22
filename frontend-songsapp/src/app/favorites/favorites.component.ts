import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  searchText: any;

  public songs: any[] = []

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  openPopUp(song: any){
    
    this.dialogRef.open(DetailsComponent, {
      data: song
    })
  }

}
