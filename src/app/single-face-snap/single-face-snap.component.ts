import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, registerLocaleData } from '@angular/common';
import { FaceSnap } from '../models/facesnap';
import { FaceSnapService } from '../services/facesnaps.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

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
  faceSnap$!: Observable<FaceSnap> 
  buttonMessage! : string

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute, private router : Router) {
    }
  
  ngOnInit() {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId)
    console.log(this.faceSnap$)
    this.buttonMessage = "Oh Snap!"
  }

  onBack() : void {
    this.router.navigateByUrl("facesnaps")
  }
  onAddSnap(faceSnapId : number) {
    if (this.buttonMessage === "Oh Snap!") {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.buttonMessage = "Oops unSnap!";
        })
      )
    }
    else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.buttonMessage = "Oh Snap!";
        })
      )
    }
    //const faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  //this.buttonMessage = this.faceSnapService.snapSwitchById(faceSnapId, this.buttonMessage)

  

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
