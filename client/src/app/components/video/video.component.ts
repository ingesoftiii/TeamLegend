import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    id = 'F0IbjVq-fgs';
    playerVars = {
      cc_lang_pref: 'en'
    };
    private player;
    private ytEvent;
  
    constructor() {
    
    }
    onStateChange(event) {
      this.ytEvent = event.data;
    }
    savePlayer(player) {
      this.player = player;
    }
    
    playVideo() {
      this.player.playVideo();
    }
    
    pauseVideo() {
      this.player.pauseVideo();
    }
    ngOnInit() {
    }

}
