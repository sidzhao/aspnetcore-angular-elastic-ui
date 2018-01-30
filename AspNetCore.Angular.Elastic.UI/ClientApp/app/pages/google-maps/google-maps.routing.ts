import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { GoogleMapsComponent } from './google-maps.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleMapsRoutingModule { }