import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private translate: TranslateService) { }

  ngOnInit() {}
 
  public go(url) {
    let lang = this.translate.currentLang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.router.navigate([url])
  }

}
