import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/facesnap";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, map, switchMap, mergeMap, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class FaceSnapService {

	constructor(
		private http : HttpClient,
		private router : Router) {}

	
	getAllFaceSnaps(): Observable<FaceSnap[]> {
		return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
	};

	getFaceSnapById(id: number): Observable<FaceSnap> {
		return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`)
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

				// envoi la requete post et redirigve la list des snaps seulement quand la requête a été effectuée, j'utilise le tap car opérateur sans action sur l'observable
				return this.http.post<FaceSnap>('http://localhost:3000/facesnaps', faceSnap).pipe(
					tap(() => this.router.navigateByUrl('facesnaps'))
				);
				})
			  );
	  	    }
	
}