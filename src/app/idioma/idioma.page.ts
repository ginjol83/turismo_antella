import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from "@angular/router"
//import { NavController } from 'ionic-angular';
@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.page.html',
  styleUrls: ['./idioma.page.scss'],
})
export class IdiomaPage implements OnInit {

  constructor(private router: Router, private translate: TranslateService) { }//private navCtrl:NavController) { }

  ngOnInit() {
  }


  public cambiarLenguaje(lang) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.router.navigate(['/inicio'])
  }


}

