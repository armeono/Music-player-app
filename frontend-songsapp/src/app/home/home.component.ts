import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class HomeComponent implements OnInit {



  searchText: any;

  public songs: any[] = [{
    song: "Level Of Concern",
    artist: "Twenty One Pilots",
    album: "Scaled and Icy",
    duration: "03:45"
  },{
    song: "Can't Stop",
    artist: "RHCP",
    album: "By the Way",
    duration: "04:15"
  },{
    song: "Freaking Out the Neighbourhood",
    artist: "Mac DeMarco",
    album: "2",
    duration: "02:20"
  },{
    song: "The Recipe",
    artist: "Kendrick Lamar",
    album: "good kid, m.A.A.d city",
    duration: "04:30"
  },{
    song: "First Class",
    artist: "Jack Harlow",
    album: "Come Home The Kids Miss You",
    duration: "02:54"
  },{
    song: "No Role Modelz",
    artist: "J. Cole",
    album: "2014 Forrest Hills Drive",
    duration: "04:30"
  },{
    song: "Eventually",
    artist: "Tame Impala",
    album: "",
    duration: "02:30"
  },{
    song: "Weekend (feat. Miguel)",
    artist: "Mac Miller, Miguel",
    album: "GO:OD AM",
    duration: "03:28"
  },{
    song: "Tyler Herro",
    artist: "Jack Harlow",
    album: "Thats What They All Say",
    duration: "02:36"
  }
]

  constructor(private dialogRef: MatDialog) {

 
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
