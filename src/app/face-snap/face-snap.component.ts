import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  title! : string;
  description! : string;
  creationDate! : Date ;
  like! : number ;

  ngOnInit(): void {

    this.title = 'my friend' ;
    this.description = 'best' ;
    this.creationDate = new Date ;
    this.like = 0 ;
    
  }


}
