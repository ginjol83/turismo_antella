import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  {
  public activeLang = 'es';
  constructor(private router: Router,private translate: TranslateService) {    
    //this.translate.setDefaultLang(this.activeLang);
  }
  public go(url){
    let lang=this.translate.currentLang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.router.navigate([url])
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
