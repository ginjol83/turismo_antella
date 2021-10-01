import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from "@angular/router"


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage {

  constructor(private router: Router, public popover: PopoverController, private translate: TranslateService) { }

  public go(url) {
    let lang = this.translate.currentLang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.router.navigate([url])
  }

  CreatePopover(url) {
    console.log(url)
    this.popover.create({
      component: PopoverComponent, componentProps: { key1: url },
      showBackdrop: false
    }).then((popoverElement) => {
      popoverElement.present();

    })
  }

}
