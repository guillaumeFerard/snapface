import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { AsyncPipe, CommonModule, NgForOf } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { Observable, interval, take, map, tap, mergeMap, delay, of } from 'rxjs';
//import { title } from 'process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgForOf, FaceSnapListComponent, HeaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  yellowTrainsCalled = 0;
  redTrainsCalled = 0;
  
	ngOnInit() {
		
		}
	  
  }
