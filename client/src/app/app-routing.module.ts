import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { EquipoListComponent } from './components/equipo-list/equipo-list.component';
import {  EquipoFormComponent } from './components/equipo-form/equipo-form.component';
import {  InicioComponent } from './components/inicio/inicio.component';
import {  VideoComponent } from './components/video/video.component';

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
    path:'inicio/video',
    component: VideoComponent
  },

  {
    path:'players',
    component: PlayerListComponent
  },
  {
   path:'players/add',
   component: PlayerFormComponent
  }, 
  {
    path: 'players/edit/:id',
    component:  PlayerFormComponent  
  },

  {
    path:'equipos',
    component: EquipoListComponent
  },
  {
   path:'equipos/add',
   component: EquipoFormComponent
  }, 
  {
    path: 'equipos/edit/:id',
    component:  EquipoFormComponent  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
