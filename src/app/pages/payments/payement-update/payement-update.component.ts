import { Component, OnInit } from '@angular/core';
import {Payment} from "../../../models/Payment";
import {PaymentService} from "../../../services/payment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../../models/Employee";

@Component({
  selector: 'app-payement-update',
  templateUrl: './payement-update.component.html',
  styleUrls: ['./payement-update.component.css']
})
export class PayementUpdateComponent implements OnInit {

  payment:Payment = new Payment();
  submitted  = false;
  messageError : string;
  // @ts-ignore
  id: number;

  constructor(private paymentService : PaymentService,
              private router: Router ,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.paymentService.getPayment(this.id).subscribe({
      next : (data) =>{
        this.payment = data ;
      }
    })
  }

  onSubmit(){
    this.updatePayment();
  }

  public updatePayment() {
    this.paymentService.updatePayment(this.id, this.payment)
      .subscribe({
        next: (data) => {
          this.goToList();
        }, error: (error) => console.log(error),
      });
  }

  goToList(){
    this.router.navigate(['/payments']);
  }

}
