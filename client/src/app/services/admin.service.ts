import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Admin } from '../models/Admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Adminservice {
 

    API_URI = 'http://localhost:3000/api';
  
    constructor(private http: HttpClient) { }
  
    getAdmins(){
      return this.http.get(`${this.API_URI}/admin`);
    }
  
    getAdmin(id_admin: string){
     return this.http.get(`${this.API_URI}/admin/${id_admin}`);
    }
  
    deleteadmin(id_admin: string){
      return this.http.delete(`${this.API_URI}/admin/${id_admin}`);
    }
  
    saveAdmin(admin: Admin){
    return this.http.post(`${this.API_URI}/admin`, admin);
    }
  
    updateAdmin(id_admin: string|number, updateAdmin: Admin): Observable<Admin> {
      return this.http.put(`${this.API_URI}/admin/${id_admin}`, updateAdmin);
  
    }
  }
