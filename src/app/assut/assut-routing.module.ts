import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssutPage } from './assut.page';

const routes: Routes = [
  {
    path: '',
    component: AssutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssutPageRoutingModule {}
