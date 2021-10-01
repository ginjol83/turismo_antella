import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompuertasPage } from './compuertas.page';

const routes: Routes = [
  {
    path: '',
    component: CompuertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompuertasPageRoutingModule {}
