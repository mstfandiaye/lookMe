import { Component, OnInit } from '@angular/core'
import {FaceSnapService} from './face-snap.service'
import { time } from 'console';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(facesnapservice : FaceSnapService){

  }

  ngOnInit(): void {
    
  }
}
