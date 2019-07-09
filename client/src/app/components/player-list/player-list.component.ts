import { Component, OnInit, HostBinding } from '@angular/core';

import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

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
         console.log(res);

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
