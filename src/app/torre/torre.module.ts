import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TorrePageRoutingModule } from './torre-routing.module';
import { TorrePage } from './torre.page';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorrePageRoutingModule,TranslateModule
  ],
  declarations: [TorrePage]
})
export class TorrePageModule {}
