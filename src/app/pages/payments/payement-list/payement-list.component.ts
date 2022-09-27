import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../models/Employee";
import {Subscription} from "rxjs";
import {EmployeeService} from "../../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Payment} from "../../../models/Payment";
import {PaymentService} from "../../../services/payment.service";

@Component({
  selector: 'app-payement-list',
  templateUrl: './payement-list.component.html',
  styleUrls: ['./payement-list.component.css']
})
export class PayementListComponent implements OnInit {

  payments?: Payment[] ;
  deleted = false ;
  page: any;
  private querySub: Subscription;

  constructor(public paymentService : PaymentService , private route:ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(() => {
      this.update();
    });
  }

  update() {
    if (this.route.snapshot.queryParamMap.get('page')) {
      // @ts-ignore
      const currentPage = +this.route.snapshot.queryParamMap.get('page');
      // @ts-ignore
      const size = +this.route.snapshot.queryParamMap.get('size');
      this.reloadAllPayments(currentPage, size);
    } else {
      this.reloadAllPayments();
    }
  }

  reloadAllPayments(page: number = 1, size: number = 7) : void {
    this.paymentService.getAllPayments(page , size).subscribe({
      next : (data) => {
        this.page = data ;
        this.payments = data.content;
      },
      error:(e) => console.error(e),
    });
  }

  updatePayment(id: number){
    this.router.navigate(['updatePayment', id]);
  }

  employeeDetails(id:number){
    this.router.navigate(['details' , id]);
  }
}
