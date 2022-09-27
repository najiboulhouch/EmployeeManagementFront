import { Component, OnInit } from '@angular/core';
import {Fonction} from "../../../models/Fonction";
import {Payment} from "../../../models/Payment";
import {FonctionService} from "../../../services/fonction.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentService} from "../../../services/payment.service";
import {Employee} from "../../../models/Employee";
import {EmployeeService} from "../../../services/employee.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-payement-create',
  templateUrl: './payement-create.component.html',
  styleUrls: ['./payement-create.component.css'],
  providers: [DatePipe]
})
export class PayementCreateComponent implements OnInit {

  payment:Payment = new Payment();
  submitted  = false;
  messageError : string;
  // @ts-ignore
  employee: Employee = new Employee();
  // @ts-ignore
  id: number;

  constructor(private paymentService : PaymentService,
              private router: Router ,
              private route:ActivatedRoute ,
              private employeeService : EmployeeService,
              private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.payment.datePayment = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.employee = new Employee(0);
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe({
      next : (data) => {
          this.employee = data ;
          this.payment.salaire = this.employee.salaire;
      },
      error:(error) =>
        console.log(error),
    });
  }

  save(){
    this.payment.employee = this.employee ;
    this.paymentService.createPayment(this.payment).subscribe({next : ( data ) => {
        this.payment = data;
        this.messageError = "";
        this.goToList();
      } , error : error => {this.messageError = error.error.message ; this.submitted = false; }} );
  };



  onSubmit(){
    this.save();
  }

  goToList(){
    this.router.navigate(['/employees']);
  }
}
