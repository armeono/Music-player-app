import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  
})
export class DetailsComponent implements OnInit {

  song: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    this.song = data;
    
   }

  ngOnInit(): void {
  }

}
