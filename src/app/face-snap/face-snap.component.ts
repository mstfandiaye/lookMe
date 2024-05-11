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
  imageurl! : string;


  ngOnInit(): void {

    this.title = 'gift' ;
    this.description = 'nature beauty' ;
    this.creationDate = new Date ;
    this.like = 0 ;
    this.imageurl = 'https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_1280.jpg'

  }


}
