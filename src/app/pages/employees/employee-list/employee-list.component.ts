import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../../models/Employee";
import {Observable, Subscription} from "rxjs";
import {EtatCivil} from "../../../enums/EtatCivil";
import {AbsenceService} from "../../../services/absence.service";
import {Absence} from "../../../models/Absence";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees?: Employee[] ;
  EtatCivil = EtatCivil;
  private currentTime: number=0;
  deleted = false ;
  page: any;
  private querySub: Subscription;

  constructor(public employeeService : EmployeeService , private route:ActivatedRoute , private router : Router) { }

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
      this.reloadAllEmployee(currentPage, size);
    } else {
      this.reloadAllEmployee();
    }
  }

   reloadAllEmployee(page: number = 1, size: number = 7) : void {
    this.employeeService.getAllEmployees(page , size).subscribe({
      next : (data) => {
        this.page = data ;
        this.employees = data.content;
        console.log(this.employees);
      },
      error:(e) => console.error(e),
    });
  }

  getTS() {
    return this.currentTime;
  }


  employeeDetails(id:number){
    this.router.navigate(['details' , id]);
  }

  deleteEmployee(id: number) {
        this.employeeService.deleteEmployee(id).subscribe({
          next : (data) => {
            this.deleted = data ;
            console.log(data);
            this.reloadAllEmployee();
          }
        })

  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

  addPyment(id: number){
    this.router.navigate(['addPayment', id]);
  }



  detailsAbsencesEmployee(id: number){
    this.router.navigate(['detailsAbsenceEmployee', id]);
  }


}
