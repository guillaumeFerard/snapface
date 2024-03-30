import { Component, OnInit, Input, LOCALE_ID } from '@angular/core';
import { FaceSnap } from '../models/facesnap';
import { CommonModule, NgIf, registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgIf, CommonModule],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'} 
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() facesnap!: FaceSnap
  buttonMessage! : string
  isalreadySnaped! : boolean

  ngOnInit() {
    registerLocaleData(fr.default)
    this.isalreadySnaped = false
    this.buttonMessage = "Oh snap!"
  }

  onAddSnap() {
    if(this.buttonMessage === "Oh snap!") {
      this.facesnap.snaps++;
      this.buttonMessage = "Oops snaped!";
    }
    else {
      this.buttonMessage = "Oh snap!";
      this.facesnap.snaps--;
    }
  }

}
