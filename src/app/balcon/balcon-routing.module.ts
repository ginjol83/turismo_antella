import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalconPage } from './balcon.page';

const routes: Routes = [
  {
    path: '',
    component: BalconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalconPageRoutingModule {}
