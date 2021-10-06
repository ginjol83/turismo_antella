import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaeraPage } from './maera.page';

const routes: Routes = [
  {
    path: '',
    component: MaeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaeraPageRoutingModule {}
