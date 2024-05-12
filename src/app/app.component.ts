import { Component, OnInit } from '@angular/core'
import { FaceSnap } from './models/face-snap.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnap0!: FaceSnap;
  faceSnap1!: FaceSnap;
  faceSnap2!: FaceSnap;
  faceSnap3!: FaceSnap;
  faceSnap4!: FaceSnap;
  faceSnap5!: FaceSnap;
  faceSnap6!: FaceSnap;
  faceSnap7!: FaceSnap;
  faceSnap8!: FaceSnap;
  faceSnap9!: FaceSnap;

  ngOnInit(): void {
    this.faceSnap0 = new FaceSnap(

      'Gift',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_1280.jpg',
      '👍',
    )

    this.faceSnap1 = new FaceSnap(
      'Gift 2',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2024/04/13/18/22/barberry-8694277_1280.jpg',
      '👍')

    this.faceSnap2 = new FaceSnap(
      'Gift 3',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2023/06/22/07/13/soil-8080788_1280.jpg',
      '👍')


    this.faceSnap3 = new FaceSnap(
      'Gift 3',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2023/04/06/07/45/rose-7903170_1280.jpg',
      '👍')

    this.faceSnap4 = new FaceSnap(
      'Gift 4',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2023/10/29/01/32/flamingo-8348527_1280.jpg',
      '👍')

    this.faceSnap5 = new FaceSnap(
      'Gift 5',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2023/04/19/09/34/flower-7937334_1280.jpg',
      '👍')

    this.faceSnap6 = new FaceSnap(
      'Gift 6',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2023/12/12/20/32/ai-generated-8445855_1280.jpg',
      '👍')

    this.faceSnap7 = new FaceSnap(
      'Gift 7',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2024/04/25/06/50/banana-8719086_1280.jpg',
      '👍')

    this.faceSnap8 = new FaceSnap(
      'Gift 8',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2023/10/26/08/24/autumn-8342089_1280.jpg',
      '👍')

    this.faceSnap9 = new FaceSnap(
      'Gift 9',
      'Nature Beauty',
      new Date,
      0,
      'https://cdn.pixabay.com/photo/2016/08/01/13/50/blood-maple-1561055_1280.jpg',

      '👍')

  }
}
