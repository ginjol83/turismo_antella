import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorrePage } from './torre.page';

const routes: Routes = [
  {
    path: '',
    component: TorrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorrePageRoutingModule {}
