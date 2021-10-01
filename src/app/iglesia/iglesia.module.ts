import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IglesiaPageRoutingModule } from './iglesia-routing.module';
import { TranslateModule } from "@ngx-translate/core";

import { IglesiaPage } from './iglesia.page';
import { HeaderComponent } from '../header/header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IglesiaPageRoutingModule,TranslateModule//,HeaderComponent
  ], 
  
  declarations: [IglesiaPage,HeaderComponent]
})
export class IglesiaPageModule {}
