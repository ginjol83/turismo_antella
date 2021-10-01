import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from "@angular/router"


@Component({
  selector: 'app-ermita',
  templateUrl: './ermita.page.html',
  styleUrls: ['./ermita.page.scss'],
})
export class ErmitaPage implements OnInit {

  constructor(private router: Router, private translate: TranslateService) { }
  audioActivado: any
  audio: any;

  public go(url){
    let lang=this.translate.currentLang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.router.navigate([url])
  }


  ngOnInit() {
    this.audio = new Audio();
    this.audioActivado=false

    if (this.translate.currentLang==="es"){
      console.log("idioma seleccionado "+this.translate.currentLang)
    }else{
      console.log("idioma seleccionat "+this.translate.currentLang)
    }
    this.audio.src = '../assets/audioguias/ERMITA_CT.mp3';
    this.audio.load();
  }

  playAudio() { 
  this.audio.play();
    this.audio.loop = false;
  }

  reproductor(){
    if(this.audioActivado){
      this.audioActivado=false
    }else{
      this.audioActivado=true
    }
  }

  repvisible(){
    return this.audioActivado
  }

  stopAudio() {
    this.audio.pause(); 
  }

  ngOnDestroy() {
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
