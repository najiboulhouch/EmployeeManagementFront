import { Injectable } from '@angular/core';
import {apiUrl} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Absence} from "../models/Absence";
import {Payment} from "../models/Payment";
import {Fonction} from "../models/Fonction";
import {Employee} from "../models/Employee";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public paymentURL = `${apiUrl}/payments` ;

  constructor(private  http:HttpClient) { };

  getAllPayments(page: number, size: number) : Observable<any> {
    return this.http.get(`${this.paymentURL}/?page=${page}&size=${size}`).pipe();
  }

  getPayment(id: number) : Observable<Payment> {
    return this.http.get<Payment>(`${this.paymentURL}/${id}`);
  }

  createPayment(payement : Payment) : Observable<Payment> {
    return this.http.post<Payment>(this.paymentURL +"/" , payement);
  }

  updatePayment(id: number | undefined, value: any):Observable<Payment>{
    return this.http.put<Payment>(this.paymentURL + "/" + id , value);
  }

}
