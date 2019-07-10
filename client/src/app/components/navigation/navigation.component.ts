import { AuthService } from './../../auth/auth.service';
import { Adminservice } from './../../services/admin.service';
import { Admin } from './../../models/admin';
import { Sesion } from './../../models/sesion';
import { Component, OnInit, HostBinding ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'protractor';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(public authService: AuthService, private adminservices : Adminservice, private router: Router, private  activedRoute: ActivatedRoute) { }

  ngOnInit() { 

  }

sesioon: Sesion={
  estado:false

}


  admin: Admin = {
   
    id_admin:0,
    nombre_admin: "",
    apellido_admin: "",
    telefono: "",
    email_admin: "",
    nro_documento: "",
    rol_admin: "",
    cod_equipo:0,
    image: "",
    created_at: new Date(),
    usuario: "",
    contrasena: ""
   };

   admins: any = [];





activee(){

  this.authService.login()
  this.sesioon.estado=this.authService.isLoggedIn
  console.log(this.authService.isLoggedIn)
  console.log(this.sesioon.estado)
  console.log("pruebas")

}

desactive(){

  this.authService.logout();
}

  }


