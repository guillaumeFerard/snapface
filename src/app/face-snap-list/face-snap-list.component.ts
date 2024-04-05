import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/facesnap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { CommonModule, NgFor } from '@angular/common';
import { FaceSnapService } from '../services/facesnaps.service';
import { Observable, interval, tap, Subject, takeUntil } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, CommonModule, NgFor, HttpClientModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
	
  faceSnaps$!: Observable<FaceSnap[]>
  messsage$! : Observable<string>
 // private destroy$! : Subject<boolean>

	constructor(private faceSnapService: FaceSnapService) {

  }
  ngOnInit() : void {

    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps()

    // this.destroy$ = new Subject<boolean>();
  	// this.faceSnaps = this.faceSnapService.getAllFaceSnaps()
    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log)).subscribe();
  };
  // Subject = observable que l'on peut faire emettre quand on veut
//  ngOnDestroy(): void {
    // ici à la destruction destroy$ emet un true qui stop l'interval
//      this.destroy$.next(true)
      // la méthode next() fait émettre le subject, ngdestroy agit à la destruction du component un genre de "componentWillUnmont"
//  }
}
