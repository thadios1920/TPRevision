import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../entities/employe';
const URL = 'http://localhost:3000/employes' ; 

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  getEmployes():Observable<Employe[]>{ 
    return this.http.get<Employe[]>(URL); 
  }
  delEmploye(id:number){
    return this.http.delete(URL+"/"+ id);
  }

  constructor(private http:HttpClient) { }
}
