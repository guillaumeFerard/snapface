import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, registerLocaleData } from '@angular/common';
import { FaceSnap } from '../models/facesnap';
import { FaceSnapService } from '../services/facesnaps.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  providers : [ ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{

  facesnap!: FaceSnap
  buttonMessage! : string

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute, private router : Router) {
    }
  
  ngOnInit() {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapService.getFaceSnapById(faceSnapId)
    console.log(this.facesnap)
    this.buttonMessage = "Oh snap!"
  }

  onBack() : void {
    this.router.navigateByUrl("facesnaps")
  }
  onAddSnap() {
    //const faceSnap = this.faceSnapService.getFaceSnapById(this.facesnap.id);
    this.buttonMessage = this.faceSnapService.snapSwitchById(this.facesnap, this.buttonMessage)

  

    // if(this.buttonMessage === "Oh snap!") {
    //  // this.faceSnapService.SnapById(this.facesnap.id)
    //   this.buttonMessage = "Oops snaped!";
    // }
    // else {
    //   this.buttonMessage = "Oh snap!";
    //   this.faceSnapService.unSnapById(this.facesnap.id)
    // }
  }


}
