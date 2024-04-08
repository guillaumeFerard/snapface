import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/facesnap";
import { FormBuilder } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, map, switchMap, mergeMap } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class FaceSnapService {

	constructor(private http : HttpClient) {}


    faceSnaps : FaceSnap[] = []
	
	getAllFaceSnaps(): Observable<FaceSnap[]> {
		return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
	};

	getFaceSnapById(id: number): Observable<FaceSnap> {
		return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`)
		// const facesnap = this.faceSnaps.find(faceSnap => faceSnap.id === id)
		// if (facesnap) {
		// 	return facesnap;
		// } else { 
		// 	throw new Error('snap not found !');
		// }
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
	snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
		return this.getFaceSnapById(faceSnapId).pipe(
			map(faceSnap => ({ 
				...faceSnap,
				snaps: faceSnap.snaps + (snapType == 'snap' ? 1 : -1)
			})), switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
		);

	}


	addFaceSnap(formValue : {title: string, description: string, imageUrl: string, location?: string}) : Observable<FaceSnap> {
		
		let maxId = 0;
		return this.getAllFaceSnaps().pipe(
			mergeMap(faceSnaps => {
				faceSnaps.forEach(faceSnap => {
				  if (faceSnap.id > maxId) {
					maxId = faceSnap.id;
				  }
				  }); 
				  const faceSnap: FaceSnap = {
					...formValue,
					createdDate : new Date(),
					snaps: 0,
					id: maxId + 1
				  };

				//
				return this.http.post<FaceSnap>('http://localhost:3000/facesnaps', faceSnap);
				})
			  );
	  	    }
	
}





// [
// 	{
// 	  id : 1,
// 	  title: "API",
// 	  description: "une femme API",
// 	  imageUrl: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// 	  createdDate: new Date,
// 	  snaps: 0
// 	},
// 	{
// 	  id: 2,
// 	  title: "carolane mais pas sûr",
// 	  description: "une femme dans un champ",
// 	  imageUrl: "https://media.istockphoto.com/id/976585606/nl/foto/in-de-weide.webp?s=2048x2048&w=is&k=20&c=FUiGjCWJhqKSe4YKulEmrD6e-4aBHyMCnz9rvX-QC0Q=",
// 	  createdDate: new Date,
// 	  snaps: 0,
// 	  location: "à la campagne"
// 	},
// 	{
// 	  id: 3,
// 	  title: "Golden",
// 	  description: "deux bébé golden retriever",
// 	  imageUrl: "https://media.istockphoto.com/id/1406795237/nl/foto/emotional-behaviour-of-golden-retriever-puppies-sitting-isolated.webp?s=2048x2048&w=is&k=20&c=p9zbnCO6cD1xrVyN-x2C-s8ATjqS54zVQHPPWfE1esI=",
// 	  createdDate: new Date,
// 	  snaps: 0
// 	}
//   ]