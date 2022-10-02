import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/Employee";
import {apiUrl} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employeeUrl = `${apiUrl}`;

  constructor(private  http:HttpClient) { }

  getAllEmployees(page: number, size: number) : Observable<any> {
    return this.http.get(`${this.employeeUrl}/employees/?page=${page}&size=${size}`).pipe();
  }

  getAllEmployeesForSelect() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.employeeUrl}/employees/employeesForList`);
  }

  getEmployee(id: number | undefined) : Observable<Employee>{
    return this.http.get<Employee>(`${this.employeeUrl}/employees/${id}`);
  }

  createEmployee(employee : Employee) : Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl +"/employees/" , employee);
  }

  uploadPhotoEmployee(file: File, idEmployee : number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.employeeUrl+'/employees/uploadPhoto/'+idEmployee, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  deleteEmployee(id:number) : Observable<any>{
    return this.http.delete(`${this.employeeUrl}/employees/${id}` , {responseType : 'text'});
  }

  getPictureEmployee(id : number | undefined) : string {
    return this.employeeUrl+'/employees/photoEmployee/'+id;
  }

  updateEmployee(id: number | undefined, value: Employee):Observable<Employee>{
    return this.http.put<Employee>(this.employeeUrl + "/employees/" + id , value);
  }




}
