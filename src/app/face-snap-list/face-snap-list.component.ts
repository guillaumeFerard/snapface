import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/facesnap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { CommonModule, NgFor } from '@angular/common';
import { FaceSnapService } from '../services/facesnaps.service';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, CommonModule, NgFor],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {
	faceSnaps! : FaceSnap[]

	constructor(private faceSnapService: FaceSnapService) {

  }
  ngOnInit() : void {
	this.faceSnaps = this.faceSnapService.getAllFaceSnaps()
  }
}
