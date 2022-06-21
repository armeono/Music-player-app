import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  }
]

  constructor() {

 
   }

  ngOnInit(): void {
  }

}
