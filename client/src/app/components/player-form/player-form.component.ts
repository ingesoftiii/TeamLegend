import { Player } from './../../models/Player';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PlayersService } from '../../services/players.service';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  player: Player = {
    id: 0,
    nombre: '',
    apellido: '',
    telefono:'',
    email:'',   
    tipo_doc:'',
    fecha_nac: '',
    cod_equipo:'',
    nro_doc: '',
    username: '',
    password:'',
    image: '',
    created_at: new Date()
};

edit: boolean = false;

  constructor( private playersService: PlayersService, private router: Router, private  activedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id){
    
      this.playersService.getPlayer(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.player = res;
          this.edit = true;
        },
        err => console.error(err)
      ) 
    }
  }

  saveNewPlayer(){
    delete this.player.created_at;
    delete this.player.id;

    this.playersService.savePlayer(this.player)
    .subscribe(
      res => {
      console.log(res);
      this.router.navigate(['/players']);
      },
      err => console.error(err)
    )
  }

  updatePlayer(){
    delete this.player.created_at;
    this.playersService.updatePlayer(this.player.id,this.player)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/players']);
      },
      err => console.error(err)
    )
    
  }

}
