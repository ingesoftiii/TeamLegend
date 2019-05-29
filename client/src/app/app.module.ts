import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayersService } from './services/players.service';
import { EquipoFormComponent } from './components/equipo-form/equipo-form.component';
import { EquipoListComponent } from './components/equipo-list/equipo-list.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './components/maps/maps.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VideoComponent } from './components/video/video.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavigationUsuarioComponent } from './components/navigation-usuario/navigation-usuario.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlayerFormComponent,
    PlayerListComponent,
    EquipoFormComponent,
    EquipoListComponent,
    MapsComponent,
    InicioComponent,
    VideoComponent,
    NavigationUsuarioComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxYoutubePlayerModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBf_NmgDNnaYCvL7mOR37L5xN3UA4-WG6E'})
  ],
  providers: [
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
