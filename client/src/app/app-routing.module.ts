import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { EquipoListComponent } from './components/equipo-list/equipo-list.component';
import {  EquipoFormComponent } from './components/equipo-form/equipo-form.component';
import {  InicioComponent } from './components/inicio/inicio.component';
import {  VideoComponent } from './components/video/video.component';
import {  ContactoComponent } from './components/contacto/contacto.component';
import {  DesccripcionComponent } from './components/desccripcion/desccripcion.component';
import {  PerfilComponent } from './components/perfil/perfil.component';
import {  PatrocinadoresComponent } from './components/patrocinadores/patrocinadores.component';
import {  AdministradorComponent } from './components/administrador/administrador.component';
import {  ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import {  AdminComponent } from './components/admin/admin.component';
import { Admin1Component } from './components/admin1/admin1.component';
import { Admin2Component } from './components/admin2/admin2.component';
import { Admin3Component } from './components/admin3/admin3.component';
import { Admin4Component } from './components/admin4/admin4.component';
import { Admin5Component } from './components/admin5/admin5.component';
import { RecorridoComponent } from './components/recorrido/recorrido.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch: 'full'
  },
  {
    path:'inicio',
    component: InicioComponent
  },

  {
    path:'inicio/convocatoria',
    component: ConvocatoriaComponent
  },
  {
  path:'administrar',
  component: AdminComponent
},
  
  {
    path:'administrador',
    component: AdministradorComponent
  },
  
  {
    path:'inicio/video',
    component: VideoComponent
  },
  {
    path:'inicio/perfil',
    component: PerfilComponent
  },
  {
    path:'inicio/contacto',
    component: ContactoComponent
  },
  {
    path:'inicio/descripcion',
    component: DesccripcionComponent
  },
  {
    path:'inicio/patrocinadores',
    component: PatrocinadoresComponent
  },
  {
    path:'inicio/recorrido',
    component: RecorridoComponent
  },

  {
    path:'players',
    component: AdminComponent
  },
  {
   path:'players/add',
   component: Admin1Component
  }, 
  {
    path: 'players/edit/:id',
    component:  Admin1Component  
  },

  {
    path:'equipos',
    component: Admin2Component
  },
  {
   path:'equipos/add',
   component: Admin3Component
  }, 
  {
    path: 'equipos/edit/:id',
    component:  Admin3Component  
  },

  {
    path: 'post',
    component:  Admin4Component  
  },
  {
    path: 'post/add',
    component:  Admin5Component  
  },
  {
    path: 'post/edit/:id',
    component:  Admin5Component  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
