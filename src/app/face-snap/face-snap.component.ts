import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import {FaceSnapService} from '../face-snap.service'

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap ;
  
  constructor(private facesnapservice : FaceSnapService){

  }
  

  ngOnInit(): void {

    

  }

  onAddClick(){
    if (this.faceSnap.textButton === '👍'){
      this.facesnapservice.getfaceSnapByID(this.faceSnap.id);
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
