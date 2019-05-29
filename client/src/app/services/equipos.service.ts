import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Equipo } from '../models/Equipos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
 

    API_URI = 'http://localhost:3000/api';
  
    constructor(private http: HttpClient) { }
  
    getEquipos(){
      return this.http.get(`${this.API_URI}/equipo`);
    }
  
    getEquipo(id_equipo: string){
     return this.http.get(`${this.API_URI}/equipo/${id_equipo}`);
    }
  
    deleteEquipo(id_equipo: string){
      return this.http.delete(`${this.API_URI}/equipo/${id_equipo}`);
    }
  
    saveEquipo(equipo: Equipo){
    return this.http.post(`${this.API_URI}/equipo`, equipo);
    }
  
    updateEquipo(id_equipo: string|number, updateEquipo: Equipo): Observable<Equipo> {
      return this.http.put(`${this.API_URI}/equipo/${id_equipo}`, updateEquipo);
  
    }
  }
