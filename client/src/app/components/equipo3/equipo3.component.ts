import { Component, OnInit,HostBinding } from '@angular/core';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-equipo3',
  templateUrl: './equipo3.component.html',
  styleUrls: ['./equipo3.component.css']
})
export class Equipo3Component implements OnInit {

  @HostBinding('class') classes = 'row';

  equipos: any = [];

  constructor(private equiposervice: EquiposService) { }

  ngOnInit() {
 this.getEquipo();
 
    
  }

  getEquipo(){
    this.equiposervice.getEquipos().subscribe(
      res => {
         this.equipos = res;
      },
      err => console.error(err)
    );

  }

  deleteEquipo(id_equipo: string){
    this.equiposervice.deleteEquipo(id_equipo).subscribe(
      res =>{
         console.log(res);
         this.getEquipo();
      },
      err => console.error(err)
    )}

}
