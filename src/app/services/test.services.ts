import { Injectable } from "@angular/core";
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Méthode qui retourne un Observable de type string
  getData(): Observable<string> {
    // Simulons un délai de 1 seconde avant d'émettre la donnée
    return of('Données obtenues après un certain délai').pipe(
      // Délai artificiel pour simuler un traitement asynchrone
      delay(1000)
    );
  }
}