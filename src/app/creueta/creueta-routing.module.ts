import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreuetaPage } from './creueta.page';

const routes: Routes = [
  {
    path: '',
    component: CreuetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreuetaPageRoutingModule {}
