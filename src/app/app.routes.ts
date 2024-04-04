//peux aussi fonctionner pour les petites application sinon préférer créer un module routing avec le CLI

import { Routes } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'facesnaps',
    component: FaceSnapListComponent,
  },
  {
    path: 'facesnaps/:id',
    component: SingleFaceSnapComponent,
  },
  {
    path: 'create',
    component: NewFaceSnapComponent
  }
];
