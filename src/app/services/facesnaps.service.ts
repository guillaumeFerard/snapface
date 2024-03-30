import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/facesnap";

@Injectable({
    providedIn: "root"
})

export class FaceSnapService {
    
    
    faceSnaps : FaceSnap[] = [
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
