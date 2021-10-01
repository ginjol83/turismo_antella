import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutesPageRoutingModule } from './rutes-routing.module';

import { RutesPage } from './rutes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutesPageRoutingModule
  ],
  declarations: [RutesPage]
})
export class RutesPageModule {}
