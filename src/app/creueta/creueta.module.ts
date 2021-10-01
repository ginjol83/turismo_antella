import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreuetaPageRoutingModule } from './creueta-routing.module';

import { CreuetaPage } from './creueta.page';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreuetaPageRoutingModule,TranslateModule
  ],
  declarations: [CreuetaPage]
})
export class CreuetaPageModule {}
