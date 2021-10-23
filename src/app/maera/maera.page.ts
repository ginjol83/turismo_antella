import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-maera',
  templateUrl: './maera.page.html',
  styleUrls: ['./maera.page.scss'],
})
export class MaeraPage implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    if (this.translate.currentLang==="es"){
      console.log("idioma seleccionado "+this.translate.currentLang)
    }else{
      console.log("idioma seleccionat "+this.translate.currentLang)
    }
  }
}
