import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssutPageRoutingModule } from './assut-routing.module';

import { AssutPage } from './assut.page';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssutPageRoutingModule,TranslateModule
  ],
  declarations: [AssutPage]
})
export class AssutPageModule {}
