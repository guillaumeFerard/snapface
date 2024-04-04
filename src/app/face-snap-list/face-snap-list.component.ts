import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/facesnap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { CommonModule, NgFor } from '@angular/common';
import { FaceSnapService } from '../services/facesnaps.service';
import { Observable, interval, tap, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, CommonModule, NgFor ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy{
	
  faceSnaps! : FaceSnap[]
  messsage$! : Observable<string>
  private destroy$! : Subject<boolean>

	constructor(private faceSnapService: FaceSnapService) {

  }
  ngOnInit() : void {
    this.destroy$ = new Subject<boolean>();
  	this.faceSnaps = this.faceSnapService.getAllFaceSnaps()
    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log)).subscribe();
  };
  // Subject = observable que l'on peut faire emettre quand on veut
  ngOnDestroy(): void {
      this.destroy$.next(true)
      // la méthode next() fait émettre le subject
  }
}
