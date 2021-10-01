import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutesPage } from './rutes.page';

const routes: Routes = [
  {
    path: '',
    component: RutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutesPageRoutingModule {}
