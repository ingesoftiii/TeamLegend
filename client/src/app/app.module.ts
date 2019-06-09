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
import { PerfilComponent } from './components/perfil/perfil.component';
import { DesccripcionComponent } from './components/desccripcion/desccripcion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PatrocinadoresComponent } from './components/patrocinadores/patrocinadores.component';
import { NavigationEquipoComponent } from './components/navigation-equipo/navigation-equipo.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { GroupComponent } from './components/group/group.component';
import { LoginComponent } from './components/login/login.component';





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
    PerfilComponent,
    DesccripcionComponent,
    ContactoComponent,
    PatrocinadoresComponent,
    NavigationEquipoComponent,
    AdministradorComponent,
    FooterComponent,
    ConvocatoriaComponent,
    GroupComponent,
    LoginComponent,
  
 
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
