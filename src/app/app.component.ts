import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/facesnap';
import { CommonModule, NgForOf } from '@angular/common';
//import { title } from 'process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent, CommonModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  faceSnaps! : FaceSnap[]

  ngOnInit() {
    this.faceSnaps = [
      {
        title: "API",
        description: "une femme API",
        imageUrl: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        createDate: new Date,
        snaps: 0
      },
      {
        title: "carolane mais pas sûr",
        description: "une femme dans un champ",
        imageUrl: "https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-personnage-debout-dans-le-pre-des-champs-perduintespace-par-amaan.jpeg",
        createDate: new Date,
        snaps: 0,
        location: "à la campagne"
      },
      {
        title: "Golden",
        description: "deux bébé golden retriever",
        imageUrl: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        createDate: new Date,
        snaps: 0
      }
    ]
  }
}

