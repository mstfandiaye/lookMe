import { Component, OnInit } from '@angular/core'
import { FaceSnap } from './models/face-snap.models'
import { time } from 'console';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps! : FaceSnap[] ;
  

  ngOnInit(): void {
    this.faceSnaps = [
       {
        title : 'Gift',
        description : 'Nature Beauty',
        creationDate : new Date,
        like: 0,
        imageurl:'https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_1280.jpg',
        textButton : '👍',
        location :'somewhere'
      },
  
       {
        title : 'Gift 2',
        description : 'Nature Beauty',
        creationDate: new Date,
        like : 0,
        imageurl : 'https://cdn.pixabay.com/photo/2024/04/13/18/22/barberry-8694277_1280.jpg',
        textButton : '👍'
  
      },
  
       {
        title : 'Gift 3',
        description : 'Nature Beauty',
        creationDate : new Date,
        like : 0,
        imageurl : 'https://cdn.pixabay.com/photo/2023/06/22/07/13/soil-8080788_1280.jpg',
        textButton : '👍'
      },
  
  
      {
        title : 'Gift 3',
        description : 'Nature Beauty',
        creationDate : new Date,
        like : 0,
        imageurl : 'https://cdn.pixabay.com/photo/2023/04/06/07/45/rose-7903170_1280.jpg',
        textButton : '👍'
      },
  
      {
        title : 'Gift 4',
        description : 'Nature Beauty',
        creationDate : new Date,
        like : 0,
        imageurl : 'https://cdn.pixabay.com/photo/2023/10/29/01/32/flamingo-8348527_1280.jpg',
        textButton : '👍',
      location : 'some other where'
      },
  
      {
        title : 'Gift 5',
        description : 'Nature Beauty',
        creationDate : new Date,
        like : 0,
        imageurl :'https://cdn.pixabay.com/photo/2023/04/19/09/34/flower-7937334_1280.jpg',
        textButton : '👍'
      },
  
      {
        title: 'Gift 6',
        description : 'Nature Beauty',
        creationDate : new Date,
        like : 0,
        imageurl : 'https://cdn.pixabay.com/photo/2023/12/12/20/32/ai-generated-8445855_1280.jpg',
        textButton : '👍'
      },
  
     {
        title : 'Gift 7',
        description : 'Nature Beauty',
        creationDate : new Date,
        like : 0,
        imageurl : 'https://cdn.pixabay.com/photo/2024/04/25/06/50/banana-8719086_1280.jpg',
        textButton :'👍'
      },
  
      {
        title : 'Gift 8',
        description : 'Nature Beauty',
        creationDate  : new Date,
        like : 0,
        imageurl : 'https://cdn.pixabay.com/photo/2023/10/26/08/24/autumn-8342089_1280.jpg',
        textButton : '👍'
      },
      {
        title : 'Gift 9',
        description : 'Nature Beauty',
        creationDate: new Date,
        like : 0,
        imageurl : 'https://cdn.pixabay.com/photo/2016/08/01/13/50/blood-maple-1561055_1280.jpg',
  
        textButton: '👍',
      location  : 'anywhere'}

    ]; 
    

  

  }
}
