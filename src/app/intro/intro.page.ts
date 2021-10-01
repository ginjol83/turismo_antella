import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {
  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController) {
  }
  playVideoLocal() {
    //this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => { 
      console.log("prova");
    this.videoPlayer.play('../assets/intro.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
/*
  playVideoHosted() {
    this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }*/
    


}
