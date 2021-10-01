import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdiomaPage } from './idioma.page';

const routes: Routes = [
  {
    path: '',
    component: IdiomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdiomaPageRoutingModule {}
