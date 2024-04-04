import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { CommonModule, NgForOf, AsyncPipe } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { Observable, interval, map } from 'rxjs';
import { DataService } from './services/test.services';
//import { title } from 'process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, NgForOf, FaceSnapListComponent, HeaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  interval$! : Observable<string>
  data$! : Observable<string>;

  constructor(private data : DataService) {

  }

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      map(value => value % 2 === 0 ? `je suis ${value} suis pair` : `je suis ${value} impair`))
  }
}

