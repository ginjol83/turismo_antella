import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IglesiaPage } from './iglesia.page';

const routes: Routes = [
  {
    path: '',
    component: IglesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IglesiaPageRoutingModule {}
