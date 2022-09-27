import { Injectable } from '@angular/core';
import {apiUrl} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/Employee";
import {Absence} from "../models/Absence";
import {Fonction} from "../models/Fonction";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  public absenceUrl = `${apiUrl}` + '/absences';

  constructor(private  http:HttpClient) { }

  getNbrAbsenceByEmployee(id: number | undefined) : Observable<number> {
    return this.http.get<number>(`${this.absenceUrl}/getNbrAbsenceByEmployee/${id}`);
  }

  getNbrCongeByEmployee(id: number | undefined) : Observable<number> {
    return this.http.get<number>(`${this.absenceUrl}/getNbrCongeByEmployee/${id}`);
  }

  getAllAbsences(page: number, size: number) : Observable<any> {
    return this.http.get(`${this.absenceUrl}/?page=${page}&size=${size}`).pipe();
  }

  getAbsenceForEmployee(id : number | undefined) : Observable<Absence[]>{
    return this.http.get<Absence[]>(`${this.absenceUrl}/getAbsenceEmploye/${id}`);
  }

  getEmployeeByAbsence(id : number | undefined) : Observable<Employee>{
    return this.http.get<Employee>(`${this.absenceUrl}/getAbsenceEmploye/${id}`);
  }

  createAbsence(absence : Absence) : Observable<Absence> {
    return this.http.post<Absence>(this.absenceUrl +"/" , absence);
  }
}
