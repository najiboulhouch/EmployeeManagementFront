import { Injectable } from '@angular/core';
import {apiUrl} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Absence} from "../models/Absence";
import {Observable} from "rxjs";
import {Contrat} from "../models/Contrat";

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  public contratURL = `${apiUrl}` + '/contrats';

  constructor(private http: HttpClient) {
  }

  createContrat(contrat : Contrat) : Observable<Contrat> {
    return this.http.post<Contrat>(this.contratURL +"/" , contrat);
  }
}

