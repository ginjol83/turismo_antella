import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaeraPageRoutingModule } from './maera-routing.module';

import { MaeraPage } from './maera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaeraPageRoutingModule
  ],
  declarations: [MaeraPage]
})
export class MaeraPageModule {}
