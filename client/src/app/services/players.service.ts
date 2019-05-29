import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Player } from '../models/Player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get(`${this.API_URI}/player`);
  }

  getPlayer(id: string){
   return this.http.get(`${this.API_URI}/player/${id}`);
  }

  deletePlayer(id: string){
    return this.http.delete(`${this.API_URI}/player/${id}`);
  }

  savePlayer(player: Player){
  return this.http.post(`${this.API_URI}/player`, player);
  }

  updatePlayer(id: string|number, updatedPlayer: Player): Observable<Player> {
    return this.http.put(`${this.API_URI}/player/${id}`, updatedPlayer);

  }
}
