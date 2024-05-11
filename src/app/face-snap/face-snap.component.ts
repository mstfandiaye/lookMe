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
  textButton! : string;

  ngOnInit(): void {

    this.title = 'Gift' ;
    this.description = 'Nature Beauty' ;
    this.creationDate = new Date ;
    this.like = 0 ;
    this.imageurl = 'https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_1280.jpg'
    this.textButton = '👍' ;

  }

  onAddClick(){
    if (this.textButton === '👍'){
      this.like++;
      this.textButton ='👎' ;
    } else {
      this.like--;
      this.textButton = '👍' ;
    }
    
  }


}
