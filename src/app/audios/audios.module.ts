import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiosPageRoutingModule } from './audios-routing.module';

import { AudiosPage } from './audios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiosPageRoutingModule
  ],
  declarations: [AudiosPage]
})
export class AudiosPageModule {}
