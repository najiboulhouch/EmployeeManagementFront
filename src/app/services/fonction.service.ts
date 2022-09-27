import { Injectable } from '@angular/core';
import {apiUrl} from "../../environments/environment";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/Employee";
import {Fonction} from "../models/Fonction";

@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  public fonctionURL = `${apiUrl}`;

  constructor(private  http:HttpClient) { };

  getAllFonctions(page: number, size: number) : Observable<any> {
    return this.http.get(`${this.fonctionURL}/fonctions/?page=${page}&size=${size}`).pipe();
  }

  getAllFonctionsForSelect() : Observable<Fonction[]> {
    return this.http.get<Fonction[]>(`${this.fonctionURL}/fonctions/fonctionsForList`);
  }

  getFonction(id: number | undefined) : Observable<Fonction>{
    return this.http.get<Fonction>(`${this.fonctionURL}/fonctions/${id}`);
  }

  createFonction(fonction : Fonction) : Observable<Fonction> {
    return this.http.post<Fonction>(this.fonctionURL +"/fonctions/" , fonction);
  }

  deleteFonction(id:number) : Observable<any>{
    return this.http.delete(`${this.fonctionURL}/fonctions/${id}` , {responseType : 'text'});
  }

  updateFonction(id: number | undefined, value: any):Observable<Fonction>{
    return this.http.put<Fonction>(this.fonctionURL + "/fonctions/" + id , value);
  }

}
