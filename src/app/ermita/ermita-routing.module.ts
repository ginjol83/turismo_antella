import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErmitaPage } from './ermita.page';

const routes: Routes = [
  {
    path: '',
    component: ErmitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErmitaPageRoutingModule {}
