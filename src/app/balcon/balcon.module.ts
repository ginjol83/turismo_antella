import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalconPageRoutingModule } from './balcon-routing.module';

import { BalconPage } from './balcon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalconPageRoutingModule
  ],
  declarations: [BalconPage]
})
export class BalconPageModule {}
