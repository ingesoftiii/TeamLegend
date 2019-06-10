import { Component, OnInit, HostBinding } from '@angular/core';

import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-players2',
  templateUrl: './players2.component.html',
  styleUrls: ['./players2.component.css']
})
export class Players2Component implements OnInit {
  @HostBinding('class') classes = 'row';

  players: any = [];

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
 this.getPlayer();
    
  }

  getPlayer(){
    this.playersService.getPlayers().subscribe(
      res => {
         this.players = res;
      },
      err => console.error(err)
    );

  }

  deletePlayer(id: string){
    this.playersService.deletePlayer(id).subscribe(
      res =>{
         console.log(res);
         this.getPlayer();
      },
      err => console.error(err)
    )}

}
