import { Adminservice } from './../../services/admin.service';
import { Admin } from './../../models/admin';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, HostBinding ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  @HostBinding('class') classes = 'row';
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


   login: Admin = {
   
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

   
   login1: Admin = {
   
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

  constructor( private adminservices : Adminservice,public authService: AuthService, private router: Router, private  activedRoute: ActivatedRoute) { }



  admins: any = [];



  ngOnInit() {
    this.getadmin();
    


  }

  getadmin() {
    
    this.adminservices.getAdmins()
      .subscribe(
        res => {
          this.admin=res;
          
          console.log( this.admin);
 


        },
        err => console.error(err)
      );
  }

  
logininicio(login)
{
  this.login1.usuario=login.usuario
  this.login1.contrasena=login.contrasena
  login=this.admin
for (let data of login){
if (
    this.login1.usuario == data.usuario &&   this.login1.contrasena == data.contrasena){
  this.router.navigate(['players']);
  this.authService.login().subscribe(() => {
    if (this.authService.isLoggedIn) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      console.log(this.authService.isLoggedIn)
      let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/players';

      // Redirect the user
      this.router.navigateByUrl(redirect);
    }
  });
 
  break;
}
else{
  console.log("erroneo")
  console.log(this.authService.isLoggedIn)
}
}
}

registrar(){
  
}

}
