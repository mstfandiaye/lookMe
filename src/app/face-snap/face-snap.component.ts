import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap ;
  

  

  ngOnInit(): void {

    

  }

  onAddClick(){
    if (this.faceSnap.textButton === '👍'){
      this.faceSnap.like++;
      this.faceSnap.textButton ='👎' ;
    } else {
      this.faceSnap.like--;
      this.faceSnap.textButton = '👍' ;
    }
    
  }

  onButtonClick(comment : string){
    console.log(comment)
  }
}
