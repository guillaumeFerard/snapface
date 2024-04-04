import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/facesnap";
import { error } from "node:console";
import { FormBuilder } from "@angular/forms";

@Injectable({
    providedIn: "root"
})

export class FaceSnapService {

    faceSnaps : FaceSnap[] = [
		{
		  id : 1,
		  title: "API",
		  description: "une femme API",
		  imageUrl: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		  createdDate: new Date,
		  snaps: 0
		},
		{
		  id: 2,
		  title: "carolane mais pas sûr",
		  description: "une femme dans un champ",
		  imageUrl: "https://media.istockphoto.com/id/976585606/nl/foto/in-de-weide.webp?s=2048x2048&w=is&k=20&c=FUiGjCWJhqKSe4YKulEmrD6e-4aBHyMCnz9rvX-QC0Q=",
		  createdDate: new Date,
		  snaps: 0,
		  location: "à la campagne"
		},
		{
		  id: 3,
		  title: "Golden",
		  description: "deux bébé golden retriever",
		  imageUrl: "https://media.istockphoto.com/id/1406795237/nl/foto/emotional-behaviour-of-golden-retriever-puppies-sitting-isolated.webp?s=2048x2048&w=is&k=20&c=p9zbnCO6cD1xrVyN-x2C-s8ATjqS54zVQHPPWfE1esI=",
		  createdDate: new Date,
		  snaps: 0
		}
	  ]
	
	getAllFaceSnaps(): FaceSnap[] {
		return this.faceSnaps;
	};

	getFaceSnapById(id: number): FaceSnap {
		const facesnap = this.faceSnaps.find(faceSnap => faceSnap.id === id)
		if (facesnap) {
			return facesnap;
		} else { 
			throw new Error('snap not found !');
		}
	};

	snapSwitchById(faceSnap: FaceSnap, textMessage : string) : string {
		let text = textMessage
		if (text === 'Oh snap!') {
			faceSnap.snaps++;
			return text = 'Oops Snaped!';
		}
		else {
			faceSnap.snaps--;
			return text = 'Oh snap!';
		}
	};

	addFaceSnap(formValue : {title: string, description: string, imageUrl: string, location?: string}) : void {
		const faceSnap: FaceSnap = {
			...formValue,
			createdDate : new Date(),
			snaps: 0,
			id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
		}
		this.faceSnaps.push(faceSnap)
	}
}

