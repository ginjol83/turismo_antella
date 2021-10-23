import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-iglesia',
  templateUrl: './iglesia.page.html',
  styleUrls: ['./iglesia.page.scss'],
})
export class IglesiaPage implements OnInit {

  constructor(private translate: TranslateService) { }
  audioActivado: any
  audio: any;

  ngOnInit() {
    this.audio = new Audio();
    this.audioActivado=false

    if (this.translate.currentLang==="es"){
      this.audio.src = '../assets/audioguias/IGLESIA_ES.mp3';
    }else{
      this.audio.src = '../assets/audioguias/IGLESIA_CT.mp3';
    }
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
