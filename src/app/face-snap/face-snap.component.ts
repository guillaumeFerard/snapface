import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/facesnap';
import { CommonModule, NgIf } from '@angular/common';
import { FaceSnapService } from '../services/facesnaps.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgIf, CommonModule],
  providers: [
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{

  @Input () facesnap!: FaceSnap;


  constructor(private faceSnapService: FaceSnapService, private router : Router) {
    }
  
  ngOnInit() {
  }


  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`)
  }


}
