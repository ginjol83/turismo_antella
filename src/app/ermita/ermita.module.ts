import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ErmitaPageRoutingModule } from './ermita-routing.module';
import { ErmitaPage } from './ermita.page';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErmitaPageRoutingModule,TranslateModule
  ],
  declarations: [ErmitaPage]
})
export class ErmitaPageModule {}
