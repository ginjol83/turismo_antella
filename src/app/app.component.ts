import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar,
              private translateService: TranslateService) 
  {
    this.sideMenu();
    this.initializeApp();
    // Idioma
    this.translateService.setDefaultLang('es');
    this.translateService.use('es'); 
      
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Llocs d'interes",
        url   : "/home",
        icon  : "home"
      },{
        title : "Maera",
        url   : "/maera",
        icon  : "walk"
      },{
        title : "Servicis",
        url   : "/restaurant",
        icon  : "restaurant"
      //},{
      //  title : "Audioguies",
      //  url   : "/audios",
      //  icon  : "headset"
      },
      //{
      //  title : "Contactans",
      //  url   : "/contact",
      //  icon  : "mail"
      //},
      {
        title : "Idioma",
        url   : "/idioma",
        icon  : "flag"
      }
    ]
  }
}
