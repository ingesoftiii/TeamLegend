import { Equipo } from './../../models/Equipos';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-equipo-form',
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css']
})
export class EquipoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  equipo: Equipo = {
    id_equipo:0,
    nombre_eq:'',
    region: '',
    tag: '',
    categoria_eq: '',
    cod_organizacion: '',
    image: '',
    created_at: new Date()
};

edit: boolean = false;

  constructor( private equiposervice: EquiposService, private router: Router, private  activedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id){
    
      this.equiposervice.getEquipo(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.equipo = res;
          this.edit = true;
        },
        err => console.error(err)
      ) 
    }
  }

  saveNewequipo(){
    delete this.equipo.created_at;
    delete this.equipo.id_equipo;

    this.equiposervice.saveEquipo(this.equipo)
    .subscribe(
      res => {
      console.log(res);
      this.router.navigate(['/equipos']);
      },
      err => console.error(err)
    )
  }

  updateEquipo(){
    delete this.equipo.created_at;
    this.equiposervice.updateEquipo(this.equipo.id_equipo,this.equipo)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/equipos']);
      },
      err => console.error(err)
    )
    
  }

}
