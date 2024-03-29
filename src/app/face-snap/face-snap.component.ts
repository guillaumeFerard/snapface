import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/facesnap';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() facesnap!: FaceSnap
  buttonMessage! : string
  isalreadySnaped! : boolean

  ngOnInit() {
    this.isalreadySnaped = false
    this.buttonMessage = "Oh snap!"
  }

  onAddSnap() {

      this.facesnap.snaps++;

  }

}
