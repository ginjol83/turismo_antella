import { Component, OnInit, ɵConsole } from '@angular/core';
'@angular/core';
 import {PopoverController,NavController, NavParams} from '@ionic/angular';
 import { DomSanitizer,SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  public url: SafeUrl;

  constructor(private popover:PopoverController,public navParams:NavParams,private sanitizer: DomSanitizer) {
    this.url= this.sanitizer.bypassSecurityTrustResourceUrl(this.navParams.get('key1'));
    console.log(this.url)
  } 
  
  ngOnInit() {}
  ClosePopover()
    {
      this.popover.dismiss();
    }

}
